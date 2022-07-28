import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip } from "@mui/material";
import { FormEvent, MouseEvent, useState } from "react";
import IconInput from "../../Utils/IconInput";
import { Chips, CurrentFilters, FiltersContainer } from "./StyledComponents";

type Props = {
  tags?: string[];
  onTagDelete: (i: number) => void;
  onTagAdd: (s: string) => void;
  onFilterIconClick?: (e?: MouseEvent<SVGSVGElement>) => void;
};

export default function Filters({
  tags,
  onTagDelete,
  onTagAdd,
  onFilterIconClick = (e?: any) => {},
}: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTagAdd(value);
    setValue("");
  };

  const handleClearFilters = () => {
    setValue("");
    onFilterIconClick();
  };

  return (
    <FiltersContainer>
      <IconInput
        icon="search"
        value={value}
        setValue={setValue}
        onSubmit={handleSubmit}
      />
      <CurrentFilters>
        <FontAwesomeIcon
          icon={faFilter}
          fontSize="24px"
          style={{ marginTop: "5px", cursor: "pointer" }}
          onClick={handleClearFilters}
        />
        <Chips>
          {tags &&
            tags.map((tag, i) => (
              <Chip
                label={tag}
                onDelete={() => onTagDelete(i)}
                color="secondary"
                key={i}
              />
            ))}
        </Chips>
      </CurrentFilters>
    </FiltersContainer>
  );
}
