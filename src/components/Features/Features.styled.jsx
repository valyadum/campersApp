import { styled } from 'styled-components';

export const ChangePart = styled.div`
  /* background-color: lightcoral; */
  width: 50%;
`;
export const Details = styled.div`
  margin-top: 44px;
  h4 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
  }
  hr {
    width: 430px;
    size: 1px;
    color: rgba(16, 24, 40, 0.1);
    opacity: 0.3;
    margin: 24px 0;
  }
`;
export const DescribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const DescribeItem = styled.div`
  display: flex;
  margin-right: 24px;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
