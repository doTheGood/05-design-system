import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@pal-land/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/doTheGood.png',
    alt: 'Dino Sauro',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
