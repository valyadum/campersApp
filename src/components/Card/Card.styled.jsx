import { styled } from 'styled-components';


export const CardStyle = styled.li`
  border: 1px solid rgba(16, 24, 40, 0.2);
  display: flex;
  border-radius: 20px;
  width: 888px;
  height: 358px;
  padding: 24px;
  gap: 24px;
  /* box-sizing: content-box; */
  img {
    width: 290px;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;
export const CardHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height:1.25;
  display: flex;
  justify-content: space-between;
`;
export const PriceCont = styled.div`
    display: flex;

`;
export const BtnHeart = styled.button`
   background-color: transparent;
   padding:0px 10px;
   :hover{
    transform: scale(1.1);
   }
`;
export const InfoCont = styled.div`
   display:flex ;
   margin-top: 8px;
   gap: 16px;
   div{
    display: flex;
    align-items: center;
   }
`;
export const BtnMore = styled.button`
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
`;
export const Rating = styled.div`
  text-decoration: underline var(--dark-text-color);

`;
