import React, { FC } from 'react'
import { Portal } from 'tubulang-ui'
import { PortalProps } from '../interface'

const Demo: FC<PortalProps> = () => {
  if (typeof document === `undefined`) {
    return null
  }
  return (
    <>
      <Portal node={document?.body}>this is portal</Portal>
    </>
  )
}

export default Demo
