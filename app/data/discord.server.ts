import Such from "suchjs";
import { DiscordMessage, DiscordServer } from "~/models/discord";

let serverIds = Such.instance(":increment:#[start=1]");
let categoryIds = Such.instance(":increment:#[start=1]");
let channelIds = Such.instance(":increment:#[start=1]");

export const data: DiscordServer[] = [
  {
    id: serverIds.a() as number,
    label: "Tailwind CSS",
    img: "tailwind.png",
    categories: [
      {
        id: categoryIds.a() as number,
        label: "",
        channels: [
          {
            id: channelIds.a() as number,
            label: "welcome",
            description:
              "Introduction to the Tailwind CSS framework and community.",
            icon: "Book",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "announcements",
            icon: "Speakerphone",
            messages: getMessages(),
          },
        ],
      },
      {
        id: categoryIds.a() as number,
        label: "Tailwind CSS",
        channels: [
          {
            id: channelIds.a() as number,
            label: "general",
            description:
              "General discussion of Tailwind CSS (please move off-topic discussion in the off-topic channels).",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "plugins",
            description: "Tailwind CSS plugins.",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "help",
            description:
              "Help with Tailwind CSS and build process integration.",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "internals",
            description: "Development of the Tailwind CSS framework itself.",
            messages: getMessages(),
          },
        ],
      },
      {
        id: categoryIds.a() as number,
        label: "Tailwind Labs",
        channels: [
          {
            id: channelIds.a() as number,
            label: "tailwind-ui",
            description: "General discussion of Tailwind UI.",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "headless-ui",
            description: "General discussion of Headless UI.",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "refactoring-ui",
            description: "General discussion of Refactoring UI.",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "heroicons",
            description: "General discussion of Heroicons.",
            unread: true,
            messages: getMessages(),
          },
        ],
      },
      {
        id: categoryIds.a() as number,
        label: "Off topic",
        channels: [
          {
            id: channelIds.a() as number,
            label: "design",
            description: "General discussion of web design.",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "development",
            description: "General discussion of web development.",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "random",
            description: "General discussion of everything else!",
            unread: true,
            messages: getMessages(),
          },
        ],
      },
      {
        id: categoryIds.a() as number,
        label: "Community",
        channels: [
          {
            id: channelIds.a() as number,
            label: "jobs",
            description:
              "Job board. Please put [HIRING] or [FOR HIRE] at the beginning of your post.",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "showcase",
            description: "Share your projects built with Tailwind CSS!",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "bots",
            description: "Bot spam containment.",
            messages: getMessages(),
          },
        ],
      },
    ],
  },
  {
    id: serverIds.a() as number,
    label: "Remix",
    img: "remix.png",
    categories: [
      {
        id: categoryIds.a() as number,
        label: "",
        channels: [
          {
            id: channelIds.a() as number,
            label: "welcome",
            icon: "Book",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "announcements",
            icon: "Speakerphone",
            messages: getMessages(),
          },
        ],
      },
      {
        id: categoryIds.a() as number,
        label: "Remix",
        channels: [
          {
            id: channelIds.a() as number,
            label: "general",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "help",
            description:
              "Get help from the Remix creators and community volunteers.",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "react-router",
            description:
              "Anything and everything about routing in React Router!",
            messages: getMessages(),
          },
        ],
      },
      {
        id: categoryIds.a() as number,
        label: "Community",
        channels: [
          {
            id: channelIds.a() as number,
            label: "introductions",
            description:
              "Introduce yourself to the Remix community! We'd love to get to know you better. You could start by telling us something you've worked on (doesn't have to be code!), or something you're interested in building with Remix.",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "showcase",
            icon: "HashtagWithSpeechBubble",
            description: "Show off stuff you've done with Remix!",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "opportunities",
            description:
              "Full-time and/or freelance/contract work opportunities for Remix developers",
            icon: "HashtagWithSpeechBubble",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "meetups",
            description:
              "This is where folks can chat about Remix meetups going on in their area and get help starting their own local Remix meetup. https://www.meetup.com/pro/remix-run",
            icon: "HashtagWithSpeechBubble",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "random",
            description: "For non-remix chit-chat",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "events",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "remix-auth",
            description: "A channel for the (unofficial) remix-auth package",
            messages: getMessages(),
          },
        ],
      },
      {
        id: categoryIds.a() as number,
        label: "Integration",
        channels: [
          {
            id: channelIds.a() as number,
            label: "architect",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "aws",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "azure",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "cloudflare",
            icon: "HashtagWithSpeechBubble",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "express",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "fastly",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "firebase",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "fly",
            icon: "HashtagWithSpeechBubble",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "gcp",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "netlify",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "prisma",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "render",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "vercel",
            messages: getMessages(),
          },
        ],
      },
    ],
  },
  {
    id: serverIds.a() as number,
    label: "Mirage JS",
    img: "mirage.png",
    categories: [
      {
        id: categoryIds.a() as number,
        label: "Text Channels",
        channels: [
          {
            id: channelIds.a() as number,
            label: "general",
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "graphql",
            unread: true,
            messages: getMessages(),
          },
          {
            id: channelIds.a() as number,
            label: "typescript",
            unread: true,
            messages: getMessages(),
          },
        ],
      },
    ],
  },
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getMessages(): DiscordMessage[] {
  const ids = Such.instance(":increment:#[start=1,step=2]");

  return [...Array(getRandomInt(7, 25))]
    .map(() => {
      let user = Such.as(":string:{5,15}:[65-90,95,97-122]") as string;
      let avatarUrl: string = Such.as(
        ":::/avatars/`:number:[1,7]:%d`.jpg:::"
      ) as string;
      let date = Such.as(
        ":date:['yesterday','tomorrow']:%yyyy-mm-dd"
      ) as string;

      return [...Array(getRandomInt(1, 4))].map(() => ({
        id: ids.a() as string,
        user,
        avatarUrl,
        date,
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.`,
      }));
    })
    .flat();
}
