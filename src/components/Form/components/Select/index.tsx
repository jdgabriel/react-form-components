import { WarningOutlined } from '@ant-design/icons'
import { Select as SelectD } from 'antd'
import { ReactNode } from 'react'
import { Controller } from 'react-hook-form'

import { FormChildrenProps } from '../../type-props'
import { ErrorInput } from '../styles'

type SelectProps = FormChildrenProps & {
  options: {
    value: string
    label: string | ReactNode
    disabled?: boolean
  }[]
}

export default function Select({ control, label, name, options }: SelectProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <label htmlFor={name}>{label}</label>
          <SelectD
            status={error && 'error'}
            value={field.value}
            suffixIcon={error && <WarningOutlined style={{ color: 'red' }} />}
            style={{ width: '100%' }}
            onChange={field.onChange}
            options={options}
          />
          {error && <ErrorInput>{error.message}</ErrorInput>}
        </>
      )}
    />
  )
}
