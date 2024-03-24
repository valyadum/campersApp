import { styled } from 'styled-components';

export const ContainerFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  row-gap: 10px;
  column-gap: 8px;
  margin-bottom: 32px;
`;
export const HeaderFilter = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 24px;
`;
export const Line = styled.hr`
  width: 360px;
  size: 1px;
  color: rgba(16, 24, 40, 0.1);
  opacity: 0.3;
`;
export const CheckContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 95px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);

  /* mix-blend-mode: multiply; */
  p {
    text-align: center;
    font-weight: 500;
    line-height: 1.25;
  }
  input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    position: absolute;
    &:checked {
      height: 95px;
      width: 114px;
      background-color: rgba(133, 134, 138, 0.2);
      border-radius: 10px;
      border: 2px solid var(--grey-text-color);
    }
  }
`;
