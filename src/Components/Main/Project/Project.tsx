import { faAngleDown, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "@mui/material";
import React, { useState } from "react";
import Product from "./Product";
import {
  EditWrapper,
  IconContainer,
  ProjectContainer,
} from "./StyledComponents";
import { animated, useSpring } from "react-spring";
import ProjectHeader from "./ProjectHeader/ProjectHeader";
import { Project as ProjectType } from "../../Types/ProjectTypes";
import { HR } from "../../Utils/Text/StyledComponents";
import { ProductsContainer } from "./Product/StyledComponents";

export default function Project(projectInfo: ProjectType) {
  const [showProducts, setShowProducts] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleShow = () => {
    setShowProducts(!showProducts);
  };

  const handleHover = (e: any) => {
    setShowEdit(e.type === "mouseenter");
  };

  const styles = useSpring({ rotate: showProducts ? 180 : 0 });
  return (
    <EditWrapper onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <IconContainer marginTop={30} opacity={showEdit ? 1 : 0}>
        <FontAwesomeIcon icon={faPencil} />
      </IconContainer>
      <ProjectContainer>
        <ProjectHeader {...projectInfo}></ProjectHeader>
        <HR />
        <Collapse in={showProducts}>
          <ProductsContainer>
            {projectInfo.products &&
              projectInfo.products.map((product) => (
                <Product
                  {...product}
                  brief={`${projectInfo.brief}-${product.brief}`}
                  key={`${projectInfo.brief}-${product.brief}`}
                />
              ))}
          </ProductsContainer>
        </Collapse>
        {projectInfo.products && (
          <animated.div style={styles}>
            <FontAwesomeIcon icon={faAngleDown} onClick={handleShow} />
          </animated.div>
        )}
      </ProjectContainer>
    </EditWrapper>
  );
}
