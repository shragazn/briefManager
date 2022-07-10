import styled, { BadgeLevel } from "styled-components";

interface Props {
  variant: BadgeLevel;
}

export const Badge = styled.div<Props>`
  color: ${({ theme }) => theme.colors.primary.text};
  background-color: ${({ theme, variant }) =>
    variant ? theme.colors[variant].main : theme.colors.user.main};
  font-size: ${({ theme }) => theme.font.main.size};
  font-weight: ${({ theme }) => theme.font.main.weight};
  border-radius: 20px;
  width: fit-content;
  padding: 3px 13px;
`;
