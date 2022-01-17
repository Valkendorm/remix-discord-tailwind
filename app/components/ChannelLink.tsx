import React from "react";
import { Link, useMatches } from "remix";
import { DiscordChannel } from "~/models/discord";
import * as Icons from "./icons";

interface ChannelLinkProps {
  channel: DiscordChannel;
}

type IconKey = keyof typeof Icons;
type State = "active" | "inactiveRead" | "inactiveUnread";

export function ChannelLink({ channel }: ChannelLinkProps) {
  let Icon = channel.icon ? Icons[channel.icon as IconKey] : Icons.Hashtag;
  let matches = useMatches();
  let active = matches.some(
    (match) => match.params?.channelId === channel.id.toString()
  );
  let state: State = active
    ? "active"
    : channel.unread
    ? "inactiveUnread"
    : "inactiveRead";
  let classes = {
    active: "text-white bg-gray-550/[0.32]",
    inactiveRead:
      "text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",
    inactiveUnread:
      "text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",
  };

  return (
    <Link
      className={`${classes[state]} flex items-center px-2 mx-2 py-1 rounded group relative`}
      prefetch="intent"
      to={`channels/${channel.id}`}
    >
      {state === "inactiveUnread" && (
        <div className="absolute left-0 w-1 h-2 -ml-2 bg-white rounded-r-full" />
      )}
      <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="w-4 h-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100" />
    </Link>
  );
}
