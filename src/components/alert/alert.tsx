import React from 'react'

import { AlertProps } from './interface'

import classNames from 'classnames'

const prefixCls = 'happy-alert'

const Alert: React.FC<AlertProps> = ({
  children,
  kind = 'info',
  className,
  ...rest
}) => {
  const alertCls = classNames(prefixCls, `${prefixCls}-${kind}`, className)

  return (
    <div {...rest} className={alertCls}>
      {children}
    </div>
  )
}

export default Alert
