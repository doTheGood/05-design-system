import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@pal-land/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The heading should be standardized with `h2`, but using an `as` also make it customizable.',
      },
    },
  },
}
