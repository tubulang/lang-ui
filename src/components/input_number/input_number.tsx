import React, { useState, ChangeEvent, FC, useEffect } from 'react'
import { InputNumberProps, NumberVal } from './interface'
import _ from 'lodash'
import { processValue } from './utils'

const InputNumber: FC<InputNumberProps> = (props) => {
  const { defaultValue, value, onChange, ...rest } = props
  const _isControlled = _.isNil(defaultValue)
  const [val, setVal] = useState<NumberVal>('')

  useEffect(() => {
    !_isControlled && setVal(defaultValue as NumberVal)
  }, [])

  useEffect(() => {
    value !== undefined && setVal(value)
  }, [value])

  const doChange = (v: number | string | null) => {
    if (_isControlled) {
      onChange && onChange(v)
    } else {
      setVal(v)
    }
  }

  const processChange = (event: ChangeEvent<HTMLInputElement>) => {
    const originValue = event.target.value
    const _value = processValue(event.target.value)
    const changed = _value + '' !== originValue

    if (changed) {
      doChange(originValue)
    } else {
      doChange(_value)
    }
  }

  const endChange = (event: ChangeEvent<HTMLInputElement>) => {
    const _value = processValue(event.target.value)
    if (_value + '' === event.target.value) {
      return
    }

    doChange(_value)
  }

  const getDisplayValue = (value: NumberVal): number | string => {
    let result: number | string
    // 不能为null
    if (value === null) {
      result = ''
    } else {
      result = value
    }
    return result
  }

  return (
    <input
      {...rest}
      value={getDisplayValue(val)}
      type='text'
      onChange={processChange}
      onBlur={endChange}
    />
  )
}

export default InputNumber
