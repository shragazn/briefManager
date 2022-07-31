import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.font.h1.size};
  font-weight: ${({ theme }) => theme.font.h1.weight};
`;
export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.font.h2.size};
  font-weight: ${({ theme }) => theme.font.h2.weight};
  margin: 0;
`;
export const H2Input = styled.input`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.font.h2.size};
  font-weight: ${({ theme }) => theme.font.h2.weight};
  display: block;

  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 0;
  text-align: right;
  padding: 0;
  border: none;
`;
export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.font.h3.size};
  font-weight: ${({ theme }) => theme.font.h3.weight};
  margin: 0;
`;

export const HR = styled.hr`
  width: 100%;
  opacity: 25%;
`;

interface DateProps {
  isProduct?: boolean;
}

export const ProjectDate = styled.div<DateProps>`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.font.main.size};
  font-weight: ${({ theme }) => theme.font.main.weight};
  margin-top: ${({ isProduct }) => (isProduct ? 0 : "15px")};
`;
