import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Product from "../Product";
import { MUITheme } from "../Utils/Theme/Theme";
import { ProjectContainer } from "./StyledComponents";
import { animated, useSpring } from "react-spring";
import ProjectHeader from "./ProjectHeader/ProjectHeader";
import { Project as ProjectType } from "../Types/ProjectTypes";
import { HR } from "../Utils/Text/StyledComponents";
import { BriefNumber } from "./ProjectID/StyledComponents";
import { ProductContainer } from "../Product/StyledComponents";

export default function Project(projectInfo: ProjectType) {
  const [showProducts, setShowProducts] = useState(true);
  const handleShow = () => {
    setShowProducts(!showProducts);
  };

  const styles = useSpring({ rotate: showProducts ? 180 : 0 });
  return (
    <ThemeProvider theme={MUITheme}>
      <ProjectContainer>
        <ProjectHeader {...projectInfo}></ProjectHeader>
        <HR />
        <Collapse in={showProducts}>
          <ProductContainer>
            {projectInfo.products &&
              projectInfo.products.map((product) => (
                <>
                  <Product
                    {...product}
                    brief={`${projectInfo.brief}-${product.brief}`}
                  />
                  <HR />
                </>
              ))}
          </ProductContainer>
        </Collapse>
        {projectInfo.products && (
          <animated.div style={styles}>
            <FontAwesomeIcon icon={faAngleDown} onClick={handleShow} />
          </animated.div>
        )}
      </ProjectContainer>
    </ThemeProvider>
  );
}
