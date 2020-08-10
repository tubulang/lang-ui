import React, { useState } from 'react'
import { InputNumber } from 'tubulang-ui'

const ControlDemo: React.FC = () => {
  const [val, setValue] = useState()

  const handleChange = (value) => {
    setValue(value)
  }

  return <InputNumber value={val} onChange={handleChange} />
}

export default ControlDemo
