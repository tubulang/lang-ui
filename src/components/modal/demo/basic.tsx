import React, { useState } from 'react'
import { Modal } from 'tubulang-ui'
import 'tubulang-ui/lib/modal/style'

const Demo: React.FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Modal visible={visible} onHide={() => setVisible(false)}>
        <div>hello</div>
        <button onClick={() => setVisible(false)}>hide modal</button>
      </Modal>
      <button onClick={() => setVisible(true)}>show modal</button>
    </div>
  )
}

export default Demo
