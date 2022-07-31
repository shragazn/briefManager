import React from "react";
import { Project } from "../../../Types/ProjectTypes";
import { H2, H2Input, ProjectDate } from "../../../Utils/Text/StyledComponents";
import ProjectID from "../ProjectID/ProjectID";
import {
  NameContainer,
  ProjectHeaderContainer,
  ProjectInfo,
} from "./StyledComponents";

interface HeaderProps extends Project {
  isEditing?: boolean;
}

export default function ProjectHeader({
  name,
  client,
  date,
  brief,
  users,
  type,
  process,
  isEditing,
}: HeaderProps) {
  return (
    <ProjectHeaderContainer>
      <ProjectInfo justify="space-between">
        <NameContainer>
          {isEditing === true ? <H2Input value={name} /> : <H2>{name}</H2>}
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
