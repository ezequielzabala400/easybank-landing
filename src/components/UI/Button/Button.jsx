import React from 'react'
import { ButtonStyled } from './ButtonStyles'

const Button = ({children}) => {
  return (
    <ButtonStyled>{children}</ButtonStyled>
  )
}

export default Button