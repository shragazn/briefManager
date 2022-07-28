import styled from "styled-components";

export const MainContainer = styled.div<{ left?: number }>`
  background-color: #e9e9e9;
  height: 100%;
  width: 100%;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.font.main.size};
  font-weight: ${({ theme }) => theme.font.main.weight};
  overflow-y: scroll;
  direction: rtl;
`;

export const BriefsContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-end;
  direction: ltr;
`;

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: calc(100% - 60px);
  margin: 70px 30px 50px 0;
  direction: ltr;
`;
