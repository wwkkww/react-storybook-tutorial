import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import HeroBanner, { HeroBannerImage } from './HeroBanner';

export default {
  title: 'HeroBanner',
  component: HeroBanner,
};

export const Light = () => <HeroBanner />;

Light.story = {
  name: 'light',
};

export const Image = () => {
  const title = text('Title', 'This is the title');
  return <HeroBannerImage src="/cat.jpg" title={title} />;
};

Image.story = {
  name: 'image',
  decorators: [withInfo],
};
