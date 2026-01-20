import { Stack } from "@mui/material";
import { TProject } from "@/core/_data/projects";

export const Project: React.FC<{ project: TProject }> = ({ project }) => {
  return (
    <Stack>
      <Stack>
        <Stack>
          {project.stacks.map((stack) => (
            <Chip key={stack}>{stack}</Chip>
          ))}
        </Stack>
        <Stack>{project.description}</Stack>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </Stack>
      <Stack>{project.title}</Stack>
      {project.imageURL && <img src={project.imageURL} alt={project.title} />}
    </Stack>
  );
};

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Stack>{children}</Stack>;
};
