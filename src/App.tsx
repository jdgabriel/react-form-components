import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Col, Row } from 'antd'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, Input, Select } from './components/Form'

const dataForm = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, { message: 'Minimum 1 caracteres' }),
  people: z.string({ required_error: 'People is required' }),
})

type DataForm = z.infer<typeof dataForm>

function App() {
  const onSubmit = (data: any) => console.log(data)

  const { control, handleSubmit } = useForm<DataForm>({
    resolver: zodResolver(dataForm),
  })

  return (
    <div style={{ margin: '50px auto', width: 300 }}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Input control={control} name="name" label="Name" />
          </Col>
          <Col span={12}>
            <Select
              control={control}
              name="people"
              label="People"
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
              ]}
            />
          </Col>

          <Col span={24}>
            <Button htmlType="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default App
