import { styled } from '../styles/styled';

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
`;

export const CardActions = styled.div`
  display: grid;
  padding: 1rem 0;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  grid-gap: 0.5rem;
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;
