import { styled } from 'styled-components';

export const FormContainer = styled.div`
  /* background-color: lightblue; */
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  width: 50%;
  padding: 24px;
  max-width: 448px;
`;
export const FormHeader = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
`;
export const Text = styled.p`
  color:var(--grey-text-color);
  line-height: 1.5;
  margin-bottom: 24px;
`;
export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  input {
    padding: 18px;
    background-color: var(--input-background);
    border: none;
    border-radius: 10px;
    color: rgba(16, 24, 40, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
  }
  textarea {
    padding: 18px;
    background-color: var(--input-background);
    border: none;
    border-radius: 10px;
    color: rgba(16, 24, 40, 0.6);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    height: 114px;
  }
`;
export const BtnSend = styled.button`
  margin-top: 24px;
  color: var(--background);
  background-color: var(--button-color);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  padding: 16px 40px;
  border-radius: 200px;
  width: 160px;
`;