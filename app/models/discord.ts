export type DiscordServer = {
  id: number;
  label: string;
  img: string;
  categories: DiscordCategory[];
};

export type DiscordCategory = {
  id: number;
  label: string;
  channels: DiscordChannel[];
};

export type DiscordChannel = {
  id: number;
  label: string;
  description?: string;
  icon?: string;
  unread?: boolean;
  messages: DiscordMessage[];
};

export type DiscordMessage = {
  id: string;
  user: string;
  avatarUrl: string;
  date: string;
  text: string;
};
