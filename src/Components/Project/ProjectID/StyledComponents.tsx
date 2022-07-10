import styled from "styled-components";

export const ProjectIDContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
`;

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Copy = styled.div`
  display: flex;
  font-size: 25px;
  gap: 20px;
  margin-bottom: 15px;
`;

export const BriefNumber = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.font.main.size};
  font-weight: ${({ theme }) => theme.font.main.weight};
`;
