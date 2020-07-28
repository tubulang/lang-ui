import React from 'react'
import Alert from 'tubulang-ui/lib/alert'
import 'tubulang-ui/lib/alert/style'

const Demo: React.FC = () => {
  return (
    <>
      <Alert kind='warning'>这是一条警告提示!</Alert>
      <br />
      <Alert kind='info'>这是一条提示提示!</Alert>
      <br />
      <Alert kind='positive'>这是一条positive提示!</Alert>
      <br />
      <Alert kind='negative'>这是一条negative提示!</Alert>
    </>
  )
}

export default Demo
