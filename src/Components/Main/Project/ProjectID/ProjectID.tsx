import { Chip } from "@mui/material";
import { ProjectIDInfo } from "../../../Types/ProjectTypes";
import BriefNumber from "../../../Utils/BriefNumber";
import { TagContainer } from "../../../Utils/Tags/Tags";
import { CopyContainer, ProjectIDContainer } from "./StyledComponents";

export default function ProjectID({
  brief,
  process,
  type,
  users,
}: ProjectIDInfo) {
  const processColor =
    process == "חוייב"
      ? "success"
      : process == "בעבודה"
      ? "info"
      : process == "לחיוב"
      ? "warning"
      : "error";

  const goToUser = () => {};

  return (
    <ProjectIDContainer>
      <CopyContainer>
        <BriefNumber brief={brief} />
        <TagContainer>
          {process && <Chip color={processColor} label={process} />}
          {type && <Chip color="secondary" label={type} />}
        </TagContainer>
      </CopyContainer>
      <TagContainer>
        {users &&
          users.map(({ userName, link }) => (
            <Chip
              color="primary"
              label={userName}
              onClick={goToUser}
              key={userName + link}
            />
          ))}
      </TagContainer>
    </ProjectIDContainer>
  );
}
