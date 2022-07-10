import React from "react";
import { Project } from "../../../Types/ProjectTypes";
import { H2, ProjectDate } from "../../../Utils/Text/StyledComponents";
import ProjectID from "../ProjectID";
import {
  NameContainer,
  ProjectHeaderContainer,
  ProjectInfo,
} from "./StyledComponents";

export default function ProjectHeader({
  name,
  client,
  date,
  brief,
  users,
  type,
  process,
}: Project) {
  return (
    <ProjectHeaderContainer>
      <ProjectInfo>
        <NameContainer>
          <H2>{name}</H2>
          <span>{client}</span>
        </NameContainer>
        <ProjectDate>{date}</ProjectDate>
      </ProjectInfo>
      <ProjectID
        brief={brief}
        process={process}
        users={users}
        type={type}
      ></ProjectID>
    </ProjectHeaderContainer>
  );
}
