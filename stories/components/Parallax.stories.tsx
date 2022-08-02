import React from 'react';

import Parallax from '../../packages/components/src/Parallax';

const ExampleChild = () => (
  <h1 style={{ color: '#bada55', fontSize: '4rem', textAlign: 'center' }}>Big Title</h1>
);

export default {
  title: '@brian-nunez/components/Parallax',
  component: Parallax,
  args: {
    backgroundImage: 'https://i.picsum.photos/id/1033/1000/1000.jpg?hmac=Ue-YDym-IHTm9TBvlPKHTND97RMFHY-9trNGP2tFP28', // Example Image
    height: '100%',
  },
  argTypes: {
    children: { control: { type: 'text' } },
  },
};

const Template = (args) => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Parallax {...args}>
      <ExampleChild />
    </Parallax>
  </div>
);

export const Full = Template.bind({});
Full.args = {};

export const Fixed = Template.bind({});
Fixed.args = {
  height: '20rem',
};
