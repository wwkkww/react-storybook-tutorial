import React, { useState } from 'react';
import { Wrapper, WrapperImage, H1, PaginationButton } from './style';
import Title from '../title/Title';
import { Button } from '../button/Button';
import { ButtonBullet } from '../button/style';

function HeroBanner() {
  return (
    <Wrapper>
      <Title />
      <Button />
    </Wrapper>
  );
}

export function HeroBannerImage({ state, title }) {
  state = {
    src: ['cat.jpg', 'cat1.jpg', 'cat2.jpg', 'cat3.jpg'],
  };

  const [index, handleIndex] = useState(0);
  return (
    <Wrapper>
      <WrapperImage src={state.src[index]} alt="" />
      <H1>{title}</H1>
      {/* <PaginationButton onClick={() => handleIndex(index + 1)}></PaginationButton>
      <PaginationButton onClick={() => handleIndex(index - 1)}></PaginationButton> */}
      <ButtonBullet onClick={() => handleIndex(index + 1)}></ButtonBullet>
      <ButtonBullet onClick={() => handleIndex(index - 1)}></ButtonBullet>
    </Wrapper>
  );
}
export default HeroBanner;
