import memo from "./Assets/MemoGram.webp";
import chatApp from "./Assets/ChatApp.webp";

export const Projects = [
  {
    title: "MemoGram",
    img: memo,
    stacks: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
    desc: "It is a Progressive Web App. An online journal to replace the traditional personal diaries, To store your Memories forever.",
    gitUrl: "https://github.com/jonathanbrus/MemoGram-client",
  },
  {
    title: "JoeyMessenger",
    img: chatApp,
    stacks: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB"],
    desc: "It is a Chat Web Application which uses websockets to provide real-time communication.",
    gitUrl: "https://github.com/jonathanbrus/chat-app",
  },
];
