import React from 'react'
import Select, { GroupBase, StylesConfig } from 'react-select'
import cn from 'classnames'
import s from './select.module.scss'

type SelectorProps = {
  label?: string
  size?: 'big' | 'medium'
} & React.ComponentProps<typeof Select>

const customStyles: StylesConfig<unknown, false, GroupBase<unknown>> = {
  option: (provided: any) => ({
    ...provided,
    color: '#8f8f8f',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '16px',
    padding: '14px 16px'
  }),
  control: (provided: any) => ({
    ...provided,
    borderRadius: '8px',
    borderColor: '#4a4a4a',
    background: '#1C1C1C'
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: '0px',
    border: '#333333',
    borderRadius: '8px'
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: 'none'
  }),
  multiValue: (provided: any) => ({
    ...provided,
    background: '#6389F5'
  }),
  multiValueRemove: (provided: any) => ({
    ...provided,
    color: 'white',
    ':hover': {
      backgroundColor: '#6389F5',
      color: 'white'
    }
  })
}

export const Selector: React.FC<SelectorProps> = ({
  size = 'medium',
  label,
  ...props
}) => {
  return (
    <div className={s.container}>
      {label && <label className={s.label}>{label}</label>}
      <Select
        isSearchable={false}
        isClearable={false}
        styles={customStyles}
        classNames={{
          option: () => s.item,
          control: (state) =>
            cn(
              s.control,
              state.isFocused && s.control_focus,
              size === 'big' && s.control_big
            )
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#242424',
            primary: '#333333',
            neutral80: 'white',
            neutral0: '#242424'
          }
        })}
        {...props}
      />
    </div>
  )
}
