import {
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useMatches,
} from "remix";
import type { LinksFunction } from "remix";
import styles from "./tailwind.css";
import globalStyles from "./styles/global.css";
import React from "react";
import { NavLink } from "./components/NavLink";
import { Discord } from "./components/icons";
import { getDiscordServers } from "./utils/discord.server";
import type { DiscordServer } from "./models/discord";

// https://remix.run/api/app#links
export let links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap",
    },
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: styles },
  ];
};

type LoaderData = {
  servers: Array<
    Pick<DiscordServer, "id" | "label"> & {
      img: string;
      firstChannelId: number;
    }
  >;
};

export let loader: LoaderFunction = async (): Promise<LoaderData> => {
  let servers = await getDiscordServers();

  // We only need to send back the first channel id from each server,
  // which is used to link directly to a server's channel
  return {
    servers: servers.map(({ id, img, label, categories }) => ({
      id,
      label,
      img,
      firstChannelId: categories[0].channels[0].id,
    })),
  };
};

export let meta: MetaFunction = () => {
  return { title: "Discord Clone" };
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  let { servers } = useLoaderData<LoaderData>();
  let matches = useMatches();

  return (
    <div className="flex text-gray-100 h-screen">
      <div className="p-3 space-y-2 overflow-y-scroll bg-gray-900 no-scrollbar hidden md:block">
        <NavLink to="/">
          <Discord className="w-7 h-5" />
        </NavLink>

        <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />

        {servers.map((server) => (
          <NavLink
            active={matches.some(
              (match) => match.params?.serverId === server.id.toString()
            )}
            key={server.id}
            to={`/servers/${server.id}/channels/${server.firstChannelId}`}
          >
            <img
              alt={`${server.label} server`}
              src={`/servers/${server.img}`}
            />
          </NavLink>
        ))}
      </div>
      {children}
    </div>
  );
}
