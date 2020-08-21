import React, { useState } from 'react'
import { Modal, Button } from 'tubulang-ui'
import 'tubulang-ui/lib/modal/style'

const Demo: React.FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Modal visible={visible} onHide={() => setVisible(false)}>
        <div>hello</div>
        <Button onClick={() => setVisible(false)}>hide modal</Button>
      </Modal>
      <Button onClick={() => setVisible(true)}>show modal</Button>
    </div>
  )
}

export default Demo
