export type TProject = {
  title: string;
  imageURL: string | null;
  stacks: string[];
  description: string;
  repo: string;
};

export const projects: TProject[] = [
  {
    title: "JoeyMessenger",
    imageURL: null,
    stacks: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
    description: "It is a Chat Web Application which uses websockets to provide real-time communication.",
    repo: "https://github.com/jonathanbrus/chat-app",
  },
  {
    title: "MemoGram",
    imageURL: null,
    stacks: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
    description:
      "It is a Progressive Web App. An online journal to replace the traditional personal diaries, To store your Memories forever.",
    repo: "https://github.com/jonathanbrus/memogram",
  },
];
