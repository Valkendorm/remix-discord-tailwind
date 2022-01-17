import { data } from "~/data/discord.server";
import type { DiscordChannel, DiscordServer } from "~/models/discord";

export async function getDiscordServers(): Promise<DiscordServer[]> {
  return data;
}

export async function getDiscordServer(
  serverId: string
): Promise<DiscordServer | undefined> {
  let servers = await getDiscordServers();
  return servers.find((server) => server.id.toString() === serverId);
}

export async function getDiscordChannel(
  serverId: string,
  channelId: string
): Promise<DiscordChannel | undefined> {
  let server = await getDiscordServer(serverId);
  let channel = server?.categories
    .map((category) => category.channels)
    .flat()
    .find((channel) => channel.id.toString() === channelId);
  return channel;
}
