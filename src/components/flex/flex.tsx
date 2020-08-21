import React from 'react'
import { FlexProps } from './interface'
import classNames from 'classnames'

const prefixCls = 'tubulang-flex'

const Flex: React.FC<FlexProps> = (props) => {
  const { className, alignCenter, justifyCenter, children, ...rest } = props
  const ClassNames = classNames(className, prefixCls, {
    [`${prefixCls}-align-center`]: alignCenter,
    [`${prefixCls}-justify-center`]: justifyCenter,
  })
  return (
    <div {...rest} className={ClassNames}>
      {children}
    </div>
  )
}

export default Flex
