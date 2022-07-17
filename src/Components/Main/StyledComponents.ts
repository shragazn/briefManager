import styled from "styled-components";

export const MainContainer = styled.div<{ left?: number }>`
  background-color: #e9e9e9;
  height: calc(100% - 70px);
  width: 100%;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  color: black;
  padding: 70px 30px 0px 0px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.font.main.size};
  font-weight: ${({ theme }) => theme.font.main.weight};
  overflow: auto;
`;
