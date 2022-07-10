import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@mui/material";
import React from "react";
import { ProjectIDInfo } from "../../Types/ProjectTypes";
import { TagContainer } from "../../Utils/Tags/Tags";
import {
  BriefNumber,
  Copy,
  CopyContainer,
  ProjectIDContainer,
} from "./StyledComponents";

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
        <Copy>
          <FontAwesomeIcon icon={faCopy} />
          <BriefNumber>{brief}</BriefNumber>
        </Copy>
        <TagContainer>
          {process && <Chip color={processColor} label={process} />}
          {type && <Chip color="secondary" label={type} />}
        </TagContainer>
      </CopyContainer>
      <TagContainer>
        {users &&
          users.map((user) => (
            <Chip color="primary" label={user.userName} onClick={goToUser} />
          ))}
      </TagContainer>
    </ProjectIDContainer>
  );
}
