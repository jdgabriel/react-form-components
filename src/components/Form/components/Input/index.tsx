import { WarningOutlined } from '@ant-design/icons'
import { Input as Inputd } from 'antd'
import { Controller } from 'react-hook-form'

import { FormChildrenProps } from '../../type-props'
import { ErrorInput } from '../styles'

export default function Input({ control, name, label }: FormChildrenProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <label htmlFor={name}>{label}</label>
          <Inputd
            status={error && 'error'}
            suffix={error && <WarningOutlined />}
            value={field.value}
            onChange={field.onChange}
          />
          {error && <ErrorInput>{error.message}</ErrorInput>}
        </>
      )}
    />
  )
}
