import React from 'react';

import Button from '../../packages/components/src/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '@echon/components/Button',
  component: Button,
  args: {
    children: 'Wow'
  },
  argTypes: {
    children: { control: { type: 'text' } },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <p>This is Cool!</p>,
};
