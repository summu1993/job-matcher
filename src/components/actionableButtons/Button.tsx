import React, { FC } from 'react'
import { ButtonProps } from '../../utils/interfaces'

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
