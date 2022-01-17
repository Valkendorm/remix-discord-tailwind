import { useState } from "react";
import { LoaderFunction, Outlet, useLoaderData } from "remix";
import { ChannelLink } from "~/components/ChannelLink";
import * as Icons from "~/components/icons";
import { DiscordServer } from "~/models/discord";
import { getDiscordServer } from "~/utils/discord.server";

type LoaderData = {
  server: DiscordServer;
};

export let loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
  let serverId = params.serverId;

  if (typeof serverId !== "string") {
    throw new Error("Invalid server id specified");
  }

  let server = await getDiscordServer(serverId);

  if (server === undefined) {
    throw new Response("Server not found with id: " + serverId, {
      status: 404,
    });
  }

  return {
    server,
  };
};

export default function ServerRoute() {
  let { server } = useLoaderData<LoaderData>();
  let [closedCategories, setClosedCategories] = useState<number[]>([]);

  let toggleCategory = (categoryId: number) => {
    setClosedCategories((categories) =>
      categories.includes(categoryId)
        ? categories.filter((id) => id !== categoryId)
        : [...categories, categoryId]
    );
  };

  return (
    <>
      <div className="bg-gray-800 w-60 flex-col hidden md:flex">
        <button className="flex items-center h-12 px-4 text-white shadow-sm font-title text-[15px] hover:bg-gray-550/[0.16] transition">
          <div className="relative w-4 h-4 mr-1">
            <Icons.Verified className="absolute w-4 h-4 text-gray-550" />
            <Icons.Check className=" absolute w-4 h-4" />
          </div>
          {server.label}
          <Icons.Chevron className="w-[18px] h-[18px] ml-auto opacity-80" />
        </button>

        <div className="flex-1 overflow-y-scroll font-medium text-gray-300 pt-3 space-y-[21px]">
          {server.categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button
                  className="flex items-center px-0.5 text-xs uppercase font-title tracking-wide hover:text-gray-100 w-full"
                  onClick={() => toggleCategory(category.id)}
                >
                  <Icons.Arrow
                    className={`${
                      closedCategories.includes(category.id) ? "-rotate-90" : ""
                    } w-3 h-3 mr-0.5 transition duration-200`}
                  />
                  {category.label}
                </button>
              )}
              <div className="space-y-0.5 mt-[5px]">
                {category.channels
                  .filter((channel) => {
                    let categoryIsOpen = !closedCategories.includes(
                      category.id
                    );
                    return categoryIsOpen || channel.unread;
                  })
                  .map((channel) => (
                    <ChannelLink channel={channel} key={channel.id} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 flex-shrink min-w-0 bg-gray-700">
        <Outlet />
      </div>
    </>
  );
}
