import basicContainer from './basic.container'

class ModalContainer extends basicContainer {
  create(className?: string): HTMLElement {
    return this.__create(className)
  }

  destroy(): void {
    this.__destroy()
  }
}

export default ModalContainer
