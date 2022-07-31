import { faAngleDown, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "@mui/material";
import React, {
  forwardRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
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

const Project = forwardRef<HTMLDivElement, ProjectType>((projectInfo, ref) => {
  const [showProducts, setShowProducts] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  // const [isEditing, setIsEditing] = useState<boolean>(false);

  const animRef = useRef<HTMLDivElement>(null);

  // const [position, setPosition] = useState({
  //   x: animRef.current?.getBoundingClientRect().x,
  //   y: animRef.current?.getBoundingClientRect().y,
  // });
  // const cornerProjectX = (position.x || 0) - 30;
  // const cornerProjectY = (position.y || 0) - 30;

  const handleShow = () => {
    setShowProducts(!showProducts);
  };

  const handleHover = (e: any) => {
    setShowEdit(e.type === "mouseenter");
  };

  const styles = useSpring({ rotate: showProducts ? 180 : 0 });
  // const editingStyle = useSpring({
  //   minWidth: isEditing ? "50vw" : "50vw",
  //   boxShadow: isEditing
  //     ? "rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px"
  //     : "rgb(50 50 93 / 25%) 0px 0px 0px -0px, rgb(0 0 0 / 30%) 0px 0px 0px -0px",
  //   top: isEditing ? "50%" : "0",
  //   left: isEditing ? "50%" : "0",
  //   transform: `scale(${isEditing ? 1.05 : 1}) translate(calc(${
  //     isEditing ? `50vw - 50% - ${cornerProjectX}px` : "0vw - 0% - 0px"
  //   }),calc(${
  //     isEditing ? `50vh - 50% - ${cornerProjectY}px` : "0vh - 0% - 0px"
  //   }) )`,
  //   borderRadius: `10px`,
  //   zIndex: isEditing ? 1 : 0,
  // });

  // const handleEditMode = (e: React.MouseEvent) => {
  //   setPosition({
  //     x: animRef.current?.getBoundingClientRect().x,
  //     y: animRef.current?.getBoundingClientRect().y,
  //   });
  //   setIsEditing(!isEditing);
  // };

  return (
    <EditWrapper
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      ref={ref}
      // isEditing={isEditing}
    >
      <IconContainer
        marginTop={30}
        opacity={showEdit ? 1 : 0}
        // onClick={handleEditMode}
      >
        <FontAwesomeIcon icon={faPencil} />
      </IconContainer>
      {/* <animated.div style={editingStyle} ref={animRef}> */}
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
      {/* </animated.div> */}
    </EditWrapper>
  );
});

export default Project;
