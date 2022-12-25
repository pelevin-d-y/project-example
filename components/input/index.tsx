import React, { useState } from 'react'
import classNames from 'classnames'
import CheckLine from '/public/svg/check_line.svg'
import Eye from '/public/svg/closeeye.svg'
import OpenEye from '/public/svg/openeye.svg'
import s from './input.module.scss'
import Image from 'next/image'

type InputProps = {
  className?: string
  label?: string
  error?: string
  success?: boolean
  type?: string
  value?: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
export const Input = ({
  className,
  id,
  label,
  type = 'text',
  error,
  success,
  required,
  disabled = false,
  placeholder,
  value,
  ...props
}: InputProps) => {
  const [passwordShown, setPasswordShown] = useState(false)

  return (
    <div className={classNames(s.container, className)}>
      {label && (
        <label htmlFor={id} className={s.label}>
          {label}
          {success && <Image src={CheckLine} alt="success" />}
        </label>
      )}
      <div className={classNames(s.input_block, required && s.required)}>
        <input
          disabled={disabled}
          placeholder={placeholder}
          id={id}
          required={required}
          className={classNames(s.input, error && s.error)}
          type={passwordShown ? 'text' : type}
          value={value}
          {...props}
        />
        {type === 'password' && (
          <div
            className={s.toggle_password}
            onClick={() => setPasswordShown(!passwordShown)}
          >
            <Image
              alt={passwordShown ? 'close' : 'show'}
              src={passwordShown ? Eye : OpenEye}
            />
          </div>
        )}
      </div>
      {error && <div className={s.error_message}>{error}</div>}
    </div>
  )
}
