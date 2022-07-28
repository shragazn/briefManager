import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 30px 30px 5px;
  border-radius: 10px;
  min-width: 80%;
  direction: ltr;
`;

interface IconContainerProps {
  marginTop?: number;
  opacity?: number;
}

export const IconContainer = styled.div<IconContainerProps>`
  color: ${({ theme }) => theme.colors.primary.main};
  opacity: ${({ opacity }) => (opacity != undefined ? opacity : 1)};
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  cursor: pointer;
`;

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  gap: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
`;
