import React from 'react';
import { StyledButton, StyledButtonSuccess, StyledButtonDanger } from './style';

export function Button({ onClick, reverse, children }) {
  const btnText = 'Default button';
  return (
    <StyledButton reverse={reverse} onClick={onClick}>
      {btnText}
    </StyledButton>
  );
}

export function ButtonSuccess({ onClick }) {
  const btnText = 'Success button';
  return <StyledButtonSuccess onClick={onClick}>{btnText}</StyledButtonSuccess>;
}

export function ButtonDanger({ onClick }) {
  const btnText = 'Danger button';
  return <StyledButtonDanger onClick={onClick}>{btnText}</StyledButtonDanger>;
}
