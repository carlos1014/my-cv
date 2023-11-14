import { Meta, Story } from '@storybook/react';

// Component
import Card, { Props } from './Card';

export default {
  title: 'Atoms/Card',
  component: Card,
} as Meta;

const Template: Story<Props> = args => (
  <Card {...args}>Esto es una tarjeta</Card>
);

export const Standard = Template.bind({});
