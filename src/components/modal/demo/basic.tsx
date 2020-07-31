import React, { useEffect } from 'react'
import { Modal } from 'tubulang-ui'

const Demo: React.FC = () => {
  useEffect(() => {
    Modal.render({ children: <div>this is render</div> })
  }, [])
  return (
    <>
      <Modal>
        <div>hello</div>
      </Modal>
      <Modal>
        <div>hello999</div>
      </Modal>
    </>
  )
}

export default Demo
