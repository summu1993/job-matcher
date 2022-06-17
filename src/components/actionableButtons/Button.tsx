/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC } from 'react'

interface ButtonProps {
  buttonText?: string
  buttonId?: string
  buttonClass: string
  datatest?: string
  buttonTestId?: string
  submitFunction?: any
  children?: any
}

const Button: FC<ButtonProps> = ({
  buttonText,
  buttonClass,
  datatest,
  buttonTestId,
  submitFunction,
  buttonId,
  children,
}) => (
  <button
    type="button"
    id={buttonId}
    data-testid={buttonTestId}
    onClick={(e) => submitFunction(e)}
    className={buttonClass}
    data-test-py={datatest}
  >
    {buttonText}
    {children}
  </button>
)

export default Button
