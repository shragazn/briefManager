import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, ReactChild } from "react";
import {
  IconInputContainer,
  StyledForm,
  StyledIconInput,
} from "./StyledComponents";

type Props = {
  icon?: "search";
  value: string;
  setValue: (value: string) => void;
  onSubmit?: (e: any) => void;
};

export default function IconInput({
  icon,
  value,
  setValue,
  onSubmit = (e?) => {
    e.preventDefault();
  },
}: Props) {
  return (
    <IconInputContainer>
      <StyledForm onSubmit={onSubmit}>
        {icon == "search" && (
          <FontAwesomeIcon
            icon={faSearch}
            style={{ cursor: "pointer" }}
            onClick={onSubmit}
          />
        )}
        <StyledIconInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </StyledForm>
    </IconInputContainer>
  );
}
