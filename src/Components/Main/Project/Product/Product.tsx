import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ProjectInfo } from "../ProjectHeader/StyledComponents";
import ProjectID from "../ProjectID";
import { EditWrapper, IconContainer } from "../StyledComponents";
import { Product as ProductType } from "../../../Types/ProjectTypes";
import { H3, HR, ProjectDate } from "../../../Utils/Text/StyledComponents";
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
  const [showEdit, setShowEdit] = useState(false);

  const handleHover = (e: any) => {
    setShowEdit(e.type === "mouseenter");
  };

  return (
    <>
      <EditWrapper onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <IconContainer marginTop={15} opacity={showEdit ? 1 : 0}>
          <FontAwesomeIcon icon={faPencil} />
        </IconContainer>
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
      </EditWrapper>
      <HR />
    </>
  );
}
