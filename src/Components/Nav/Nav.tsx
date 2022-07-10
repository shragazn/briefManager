import { faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  IconContainer,
  NavContainer,
  NavHeaderContainer,
} from "./StyledComponents";

interface link {
  link: string;
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
        <IconContainer>
          <FontAwesomeIcon icon={faUser} />
        </IconContainer>
      </NavHeaderContainer>
      <Divider />
      {links.map(({ link, icon }) => (
        <Link to={link} key={link}>
          <IconContainer key={link}>
            <FontAwesomeIcon icon={icon} />
          </IconContainer>
        </Link>
      ))}
    </NavContainer>
  );
}
