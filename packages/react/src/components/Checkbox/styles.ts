import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$green300',
  },

  '&:focus': {
    border: '2px solid $green300',
  },
})

const scaleUp = keyframes({
  from: {
    transform: 'scale(0)',
  },
  to: {
    transform: 'scale(1)',
  },
})

const scaleDown = keyframes({
  from: {
    transform: 'scale(1)',
  },
  to: {
    transform: 'scale(0)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${scaleUp} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${scaleDown} 200ms ease-out`,
  },
})
