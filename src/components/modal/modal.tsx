import React, { FC, useEffect, useRef } from 'react'
import { ModalProps, defaultProps } from './interface'
import ClassNames from 'classnames'
import Portal from '../portal'
import { ModalContainer } from '../container'

const prefixCls = 'tubulang-modal'

const Modal: FC<ModalProps> = (props) => {
  const { visible, onHide, className, size, ...rest } = props

  const modalRef = useRef<HTMLElement>()
  const ModalContainerIns = new ModalContainer()

  useEffect(() => {
    modalRef.current = ModalContainerIns.create()

    return () => ModalContainerIns.destroy()
  }, [])

  const handleHide = () => {
    onHide && onHide()
  }

  return (
    <Portal node={modalRef.current}>
      <div
        {...rest}
        className={ClassNames(`${prefixCls}-root`, className, {
          [`${prefixCls}-root-hidden`]: !visible,
        })}
      >
        <div className={ClassNames(`${prefixCls}-mask`)} />
        <div
          className={ClassNames(`${prefixCls}-wrap`)}
          role='dialog'
          onClick={handleHide}
        >
          <div
            className={ClassNames(`${prefixCls} ${prefixCls}-${size}`)}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </Portal>
  )
}

Modal.defaultProps = defaultProps

export default Modal
