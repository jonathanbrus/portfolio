import { TProject } from "@/_data/projects";

export const Project: React.FC<{ project: TProject }> = ({ project }) => {
  return (
    <div>
      <div>
        <div>
          {project.stacks.map((stack, i) => (
            <Chip key={i}>{stack}</Chip>
          ))}
        </div>
        <div>{project.description}</div>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
      <div>{project.title}</div>
      {project.imageURL && <img src={project.imageURL} alt={project.title} />}
    </div>
  );
};

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};
