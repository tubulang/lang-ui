import React from 'react'
import { AlertProps, defaultProps } from './interface'
import classNames from 'classnames'

const prefixCls = 'tubulang-alert'

const Alert: React.FC<AlertProps> = ({
  children,
  kind,
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

Alert.defaultProps = defaultProps

export default Alert
