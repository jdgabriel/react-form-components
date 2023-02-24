import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onSubmit: (data: any) => void
}

export default function Form({ children, onSubmit }: Props) {
  return <form onSubmit={onSubmit}>{children}</form>
}
