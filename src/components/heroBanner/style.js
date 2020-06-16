import styled from 'styled-components';
import { backgrounds } from '../../utilities';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 0.25em 1em;
  background-color: ${backgrounds.primary100};
  border-radius: 5px;
  width: 960px;
  height: 240px;
`;

export const WrapperImage = styled.img`
  max-height: 240px;
  width: 960px;
  object-fit: cover;
  position: relative;
  background-image: url('cat.png');
  z-index: 0;
`;

export const H1 = styled.h1`
  position: absolute;
  top: 20%;
  left: 10%;
`;

export const PaginationButton = styled.button`
  height: 12px;
  background-color: black;
  border: none;
  border-radius: 50%;
  position: absolute;
  bottom: -20%;
  margin: auto;
  display: block;

  &:hover {
    background-color: ${backgrounds.primary800};
  }

  &:first-of-type {
    margin-left: 15px;
  }
`;
