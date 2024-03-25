import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 18, 19, 0.4);

  z-index: 1200;
`;
export const ModalStyle = styled.div`
  max-width: 982px;
  max-height: calc(100vh - 24px);
  background-color: var(--background);
  padding: 40px;
  border-radius: 20px;
  overflow: auto;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  padding: 0;
`;
