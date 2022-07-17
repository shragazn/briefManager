import React from "react";
import { ProjectInfo } from "../Project/ProjectHeader/StyledComponents";
import ProjectID from "../Project/ProjectID";
import { Product as ProductType } from "../Types/ProjectTypes";
import { H3, ProjectDate } from "../Utils/Text/StyledComponents";
import Details from "./details/Details";
import { ProductHeader } from "./StyledComponents";

export default function Product({
  brief,
  date,
  details,
  description,
  name,
  process,
  type,
  users,
}: ProductType) {
  return (
    <ProductHeader>
      <ProjectInfo justify="space-between">
        <ProjectInfo>
          <H3>{name}</H3>
          <ProjectDate isProduct>{date}</ProjectDate>
          <span>{description}</span>
        </ProjectInfo>
        <Details {...details} />
      </ProjectInfo>
      <ProjectID
        brief={brief}
        process={process}
        users={users}
        type={type}
      ></ProjectID>
    </ProductHeader>
  );
}
