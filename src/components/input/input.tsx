import React from 'react'
import { InputProps } from './interface'
import classNames from 'classnames'

const prefixCls = 'tubulang-input'

const Input: React.FC<InputProps> = (props) => {
  const ClassNames = classNames(`${prefixCls}`)
  return <input {...props} className={ClassNames} />
}

export default Input
