import { styled } from 'styled-components';

export const LinkContainer = styled.ul`
  display: flex;
  gap: 40px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
`;
export const Header= styled.div`
    display: flex;
    justify-content: space-between;
`
export const PlusBox = styled.div`
/* background-color: aqua; */
display: flex;
width: 100%;
margin-top: 44px;
`;
export const ChangeBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  background-color: transparent;
  padding: 0;
  margin: 0;
  margin-right: 40px;
  
`;
export const NewLine = styled.hr`
  width: 902px;
  size: 1px;
  color: rgba(16, 24, 40, 0.1);
  opacity: 0.3;
  margin-top: 24px;
  margin-bottom: 0;
`;
export const Price = styled.div`
  display: flex;
  margin-top: 16px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;
export const Image = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  object-fit: cover;
`;
export const ImgContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
`;
export const TextDesc= styled.p`
    margin-bottom: 44px;
`