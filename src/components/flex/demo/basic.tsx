import React from 'react'
import { Flex } from 'tubulang-ui'
import 'tubulang-ui/lib/flex/style'

const Demo: React.FC = () => {
  return (
    <>
      <Flex style={{ height: '120px', border: '1px solid #333' }}>
        <div style={{ backgroundColor: 'red', width: '50px' }}>default</div>
      </Flex>
      <Flex style={{ height: '120px', border: '1px solid #333' }} alignCenter>
        <div style={{ backgroundColor: 'red', width: '50px' }}>
          align center
        </div>
      </Flex>
      <Flex style={{ height: '120px', border: '1px solid #333' }} justifyCenter>
        <div style={{ backgroundColor: 'red', width: '50px' }}>
          justify center
        </div>
      </Flex>
      <Flex
        style={{ height: '120px', border: '1px solid #333' }}
        justifyCenter
        alignCenter
      >
        <div style={{ backgroundColor: 'red', width: '50px' }}>center</div>
      </Flex>
    </>
  )
}

export default Demo
