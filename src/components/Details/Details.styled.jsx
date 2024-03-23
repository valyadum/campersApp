import { styled } from 'styled-components';

export const ListDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const DetailsBtn = styled.li`
  background-color: var(--icon-background);
  display: flex;
  align-items: center;
  padding: 12px 18px;
  border-radius: 100px;
  gap: 8px;
  p {
    color: var(--dark-text-color);
    font-weight: 500;
    line-height: 1.25;
  }
`;