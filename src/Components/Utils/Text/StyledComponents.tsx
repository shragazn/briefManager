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
export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.font.h3.size};
  font-weight: ${({ theme }) => theme.font.h3.weight};
`;

export const ProjectDate = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.font.main.size};
  font-weight: ${({ theme }) => theme.font.main.weight};
  margin-top: 15px;
`;
