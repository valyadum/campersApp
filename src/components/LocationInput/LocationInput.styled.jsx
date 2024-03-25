import { styled } from 'styled-components';

export const Text = styled.p`
  color: rgba(16, 24, 40, 0.6);
  font-weight: 500;
  margin-bottom: 8px;
`;
export const InputField = styled.div`
  background-color: var(--input-background);
  border-radius: 10px;
  width: 360px;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 18px;
  input {
    background-color: inherit;
    border: none;
    &::placeholder {
      color: var(--dark-text-color);
      line-height: 1.25;
    }
  }
`;
