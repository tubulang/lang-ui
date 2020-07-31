import React, { FC } from 'react'
import { ModalProps } from './interface'
import ReactDOM from 'react-dom'
import ClassNames from 'classnames'

const prefixCls = 'tubulang-modal'

const Modal: FC<ModalProps> = (props) => {
  console.log(props, 'hhh')
  return (
    <>
      <div className={ClassNames(`${prefixCls}-mask`, {})} />
      <div
        {...props}
        style={{
          display: 'flex',
          position: 'fixed',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 900,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {props.children}
      </div>
    </>
  )
}

const modalRender: FC<ModalProps> = (props) => {
  const modalRef = document.createElement('div')
  modalRef.className = prefixCls
  const body = document.querySelector('body')

  body?.appendChild(modalRef)

  return ReactDOM.createPortal(<Modal {...props} />, modalRef)
}

const ModalParent: FC<ModalProps> = (props) => {
  return modalRender(props)
}

export default ModalParent
export { Modal, modalRender, ModalParent }
