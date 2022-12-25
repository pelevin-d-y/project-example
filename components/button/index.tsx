import React from 'react'

import s from './button.module.scss'

type ButtonProps = React.PropsWithChildren<{
  className?: string
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  htmlType?: 'button' | 'submit' | 'reset'
  type?: 'accent' | 'additional' | 'outlined' | 'cancel'
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}>

export const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  onClick,
  className,
  disabled,
  type = 'accent',
  htmlType,
  children
}) => {
  const btnClasses = [
    className,
    s.button,
    size === 'small' ? s.small_button : '',
    size === 'medium' ? s.medium_button : '',
    size === 'large' ? s.large_button : '',
    type === 'accent' ? s.accent_blue : '',
    type === 'outlined' ? s.outlined : '',
    type === 'cancel' ? s.cancel : ''
  ].join(' ')

  return (
    <button
      className={btnClasses}
      disabled={disabled}
      type={htmlType}
      onClick={() => {
        onClick && onClick()
      }}
    >
      {children}
    </button>
  )
}
