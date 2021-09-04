export const scrollToView = ({ ref: setRef }) => {
  setRef.current.scrollIntoView({
    behavior: "smooth",
    block: "nearest", // vertical scroll property
    inline: "start", // horizontal scroll property
  });
};
