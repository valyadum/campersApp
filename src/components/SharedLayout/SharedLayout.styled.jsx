import { styled } from 'styled-components';

export const Header = styled.header`
  background-color: var(--icon-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
 padding: 20px 30px;
`;
export const Nav = styled.nav`
    display: flex;
    gap:10px;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  p {
    font-size: 30px;
    letter-spacing: -0.09em;
   
  }
`;