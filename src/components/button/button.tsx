import React, { useMemo } from 'react'
import ClassNames from 'classnames'
import { ButtonProps, ButtonType, ButtonSize } from './interface'

const prefixCls = 'tubulang-button'

const getClassName = (
  type: ButtonType | undefined,
  size: ButtonSize | undefined,
) => {
  let classNames = `${prefixCls}`
  if (type !== 'default') {
    classNames += ` ${prefixCls}-type-${type}`
  }
  if (size !== 'default') {
    classNames += ` ${prefixCls}-size-${size}`
  }

  return classNames
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type,
    size,
    htmlType,
    danger,
    disabled,
    children,
    className,
    ...rest
  } = props

  const classNames = useMemo(() => {
    return getClassName(type, size)
  }, [type, size])

  return (
    <button
      {...rest}
      type={htmlType}
      disabled={disabled}
      className={ClassNames(classNames, className, {
        disabled: disabled,
        danger: danger,
      })}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'default',
  shape: 'default',
  size: 'default',
}

export default Button
