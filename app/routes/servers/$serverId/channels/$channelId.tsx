import { LoaderFunction, useLoaderData } from "remix";
import * as Icons from "~/components/icons";
import { Message, MessageWithUser } from "~/components/Message";
import { getDiscordChannel } from "~/utils/discord.server";
import type { DiscordChannel } from "~/models/discord";

type LoaderData = {
  channel: DiscordChannel;
};

export let loader: LoaderFunction = async ({ params }): Promise<LoaderData> => {
  let { serverId, channelId } = params;

  if (typeof serverId !== "string") {
    throw new Error("Invalid server id specified");
  }

  if (typeof channelId !== "string") {
    throw new Error("Invalid channel id specified");
  }

  let channel = await getDiscordChannel(serverId, channelId);

  if (!channel) {
    throw new Response("Channel not found with id: " + channelId, {
      status: 404,
    });
  }

  return {
    channel,
  };
};

export default function ChannelRoute() {
  let { channel } = useLoaderData<LoaderData>();

  return (
    <>
      <div className="flex items-center h-12 px-2 shadow-sm">
        <div className="flex items-center">
          <Icons.Hashtag className="w-6 h-6 mx-2 font-semibold text-gray-400" />
          <span className="mr-2 text-white font-title whitespace-nowrap">
            {channel.label}
          </span>
        </div>

        {channel.description && (
          <>
            <div className="hidden md:block w-px h-6 mx-2 bg-white/[.06]"></div>
            <div className="hidden md:block mx-2 text-sm font-medium text-gray-200 truncate">
              {channel.description}
            </div>
          </>
        )}

        {/* Mobile buttons */}
        <div className="flex items-center ml-auto md:hidden">
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.HashtagWithSpeechBubble className="w-6 h-6 mx-2" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.People className="w-6 h-6 mx-2" />
          </button>
        </div>

        {/* Desktop buttons */}
        <div className="hidden items-center ml-auto md:flex">
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.HashtagWithSpeechBubble className="w-6 h-6 mx-2" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.Bell className="w-6 h-6 mx-2" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.Pin className="w-6 h-6 mx-2" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.People className="w-6 h-6 mx-2" />
          </button>
          <div className="mx-2 relative">
            <input
              className="h-6 w-36 px-1.5 text-sm font-medium border-none rounded bg-gray-900 placeholder-gray-400"
              placeholder="Search"
              type="text"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Icons.Spyglass className="w-4 h-4 mr-1.5 text-gray-400" />
            </div>
          </div>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.Inbox className="w-6 h-6 mx-2" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.QuestionCircle className="w-6 h-6 mx-2" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll">
        {channel.messages.map((message, index) => (
          <div key={message.id}>
            {index === 0 ||
            message.user !== channel.messages[index - 1].user ? (
              <MessageWithUser message={message} />
            ) : (
              <Message message={message} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
