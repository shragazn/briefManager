import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 20px 12px;
`;

export const NavHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.icon.main};
  align-items: center;
  justify-content: center;
  font-size: 48px;
  margin: 5px 0px;
`;

export const NavIconContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.icon.container};
  color: ${({ theme, color }) => color || theme.colors.icon.main};
  margin: 0 0px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  font-size: 25px;
`;

export const Divider = styled.hr`
  color: #707070;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-left-width: 0px;
  margin: 0;
`;
