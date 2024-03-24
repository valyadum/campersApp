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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  /* margin-top: 100px; */
  gap: 32px;
  width: 100%;
  align-items: flex-end;
`;
export const LoadMore = styled.button`
  margin-top: 24px;
  color: var(--dark-text-color);
  background-color: var(--background);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  padding: 16px 32px;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
`;