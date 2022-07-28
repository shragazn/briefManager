import React from "react";
import { H3 } from "../../../../Utils/Text/StyledComponents";
import { DetailContainer } from "./StyledComponents";

type Props = { fieldName: string; value: string | number };

export default function Detail({ fieldName, value }: Props) {
  return (
    <DetailContainer>
      <H3>{fieldName}</H3>
      <span>{value}</span>
    </DetailContainer>
  );
}
