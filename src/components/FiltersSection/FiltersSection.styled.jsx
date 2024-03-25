import { styled } from 'styled-components';

export const FilterSection = styled.form`
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 85px;
  overflow-x: hidden;
  padding-top: 100px;
  padding-left: 64px;
  padding-bottom: 100px;
  margin-right: 64px;
  left: 0;
  width: 30%;
  display: flex;
  flex-direction: column;

`; 
export const FilterText = styled.p`
  color: var(--grey-text-color);
  font-weight: 500;
  line-height: 1.5;
  margin-top: 32px;
  margin-bottom: 14px;
`;