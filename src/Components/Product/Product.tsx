import React from "react";
import {
  NameContainer,
  ProjectInfo,
} from "../Project/ProjectHeader/StyledComponents";
import { Product as ProductType } from "../Types/ProjectTypes";
import { H2, H3, ProjectDate } from "../Utils/Text/StyledComponents";
import { ProductHeader } from "./StyledComponents";

export default function Product({
  brief,
  date,
  details,
  name,
  process,
  type,
  users,
}: ProductType) {
  return (
    <>
      <ProductHeader>
        <H3>{name}</H3>
        <ProjectDate>{date}</ProjectDate>
      </ProductHeader>
    </>
  );
}
