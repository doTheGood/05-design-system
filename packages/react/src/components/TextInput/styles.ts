import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  padding: '$3 $4',
  borderRadius: '$sm',
  border: '2px solid $gray900',
  alignItems: 'baseline',
  backgroundColor: '$gray900',

  '&:has(input:focus)': {
    borderColor: '$green300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',
  color: '$gray400',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',
  background: 'transparent',
  color: '$white',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
