import React, { useState } from 'react'
import classNames from 'classnames'
import CheckLine from '/public/svg/check_line.svg'

import s from './textarea.module.scss'
import Image from 'next/image'

type InputProps = {
  className?: string
  label?: string
  error?: string
  success?: boolean
  type?: string
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>
export const TextArea = ({
  className,
  id,
  label,
  error,
  success,
  required,
  disabled = false,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div
      className={classNames(className, s.input_block, required && s.required)}
    >
      {label && (
        <label htmlFor={id} className={s.label}>
          {label}
          {success && <Image src={CheckLine} alt="success" />}
        </label>
      )}
      <textarea
        disabled={disabled}
        placeholder={placeholder}
        id={id}
        required={required}
        className={classNames(s.textarea, error && s.error)}
        {...props}
      />
      {error && <div className={s.error_message}>{error}</div>}
    </div>
  )
}
