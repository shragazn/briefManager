import { faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  NavIconContainer,
  NavContainer,
  NavHeaderContainer,
} from "./StyledComponents";

interface link {
  path: string;
  icon: IconDefinition;
}

type Props = {
  children?: ReactNode;
  links: link[];
};

export default function Nav({ links }: Props) {
  return (
    <NavContainer>
      <NavHeaderContainer>
        <NavIconContainer>
          <FontAwesomeIcon icon={faUser} />
        </NavIconContainer>
      </NavHeaderContainer>
      <Divider />
      {links.map(({ path, icon }) => (
        <Link to={path} key={path}>
          <NavIconContainer key={path}>
            <FontAwesomeIcon icon={icon} />
          </NavIconContainer>
        </Link>
      ))}
    </NavContainer>
  );
}
