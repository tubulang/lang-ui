import { FC } from 'react'
import { modalRender } from './modal'
import { ModalProps } from './interface'

const render: FC<ModalProps> = (props) => {
  return modalRender(props)
}

export default render
