import React from 'react'
import ReactDOM from 'react-dom'
import { PortalProps } from './interface'

const Portal: React.FC<PortalProps> = (props) => {
  return props.node ? ReactDOM.createPortal(props.children, props.node) : null
}

export default Portal
