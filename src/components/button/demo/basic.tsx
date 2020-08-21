import React from 'react'
import { Button } from 'tubulang-ui'
import 'tubulang-ui/lib/button/style'
import { Flex } from 'tubulang-ui'

const Demo: React.FC = () => {
  return (
    <Flex column>
      <Flex alignCenter>
        <div>size</div>
        <Button
          onClick={() => {
            console.log('default')
          }}
        >
          default
        </Button>
        <div style={{ padding: '5px' }}></div>
        <Button size='lg'>large</Button>
        <div style={{ padding: '5px' }}></div>
        <Button size='sm'>small</Button>
      </Flex>
      <Flex>
        <div>type</div>
        <Button type='primary'>primary</Button>
      </Flex>
    </Flex>
  )
}

export default Demo
