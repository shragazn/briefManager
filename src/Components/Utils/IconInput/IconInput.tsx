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
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

export default function IconInput({
  icon,
  value,
  setValue,
  onSubmit = (e) => {
    e.preventDefault();
  },
}: Props) {
  return (
    <IconInputContainer>
      {icon == "search" && <FontAwesomeIcon icon={faSearch} />}
      <StyledForm onSubmit={onSubmit}>
        <StyledIconInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </StyledForm>
    </IconInputContainer>
  );
}
