import OriginalModal from './modal'
// import staticRender from './static_render'
import { ModalProps } from './interface'

type StaticModalProps = typeof OriginalModal & {
  render: (props: ModalProps) => void
}

const Modal = OriginalModal as StaticModalProps

// todo createPortal不能脱离组件
// Modal.render = staticRender

export * from './interface'

export default Modal
