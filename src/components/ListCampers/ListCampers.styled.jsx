import { styled } from 'styled-components';

export const ListSection = styled.div`
  /* background-color: red; */
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 85px;
  overflow-x: hidden;
  padding-top: 100px;
  /* padding-left: 64px; */
  padding-right: 64px;
  padding-bottom: 100px;
  right: 0;
  width: 70%;
`;
export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  /* margin-top: 100px; */
  gap: 32px;
  width: 100%;
`;