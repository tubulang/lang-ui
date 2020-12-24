import React from 'react'
import { FlexProps } from './interface'
import classNames from 'classnames'
import './style'

const prefixCls = 'tubulang-flex'

const Flex: React.FC<FlexProps> = (props) => {
  const {
    className,
    alignCenter,
    justifyCenter,
    column,
    children,
    ...rest
  } = props
  const ClassNames = classNames(className, prefixCls, {
    [`${prefixCls}-align-center`]: alignCenter,
    [`${prefixCls}-justify-center`]: justifyCenter,
    [`${prefixCls}-column`]: column,
  })
  return (
    <div {...rest} className={ClassNames}>
      {children}
    </div>
  )
}

export default Flex
