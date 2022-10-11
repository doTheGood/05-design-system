import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@pal-land/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo optio dolore praesentium quod dolorum doloribus ratione ipsam et eaque atque, sapiente omnis aperiam velit, ipsa totam exercitationem ad a alias?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
