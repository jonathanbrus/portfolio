export const Project = ({ project }) => {
  return (
    <div>
      <div>
        <div>
          {project.stacks.map((stack, i) => (
            <Chip key={i}>{stack}</Chip>
          ))}
        </div>
        <div>{project.description}</div>
        <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
      <div>{project.title}</div>
      <img src={project.img} alt={project.title} />
    </div>
  );
};

const Chip = ({ children }) => {
  return <div>{children}</div>;
};
