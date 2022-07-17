import styled from "styled-components";

export const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  align-content: space-between;
  justify-content: space-between;
  gap: 50px;
`;

interface ProjectInfoProps {
  justify?: string;
}

export const ProjectInfo = styled.div<ProjectInfoProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: ${({ justify }) => justify || "flex-start"};
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
