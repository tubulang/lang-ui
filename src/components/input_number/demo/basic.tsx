import React, { useState } from 'react'
import { InputNumber } from 'tubulang-ui'
import { InputNumberProps } from '../interface'

const Demo: React.FC<InputNumberProps> = () => {
  const [val, setValue] = useState()

  const handleChange = (value) => {
    setValue(value)
  }
  return <InputNumber value={val} onChange={handleChange} />
}

export default Demo
