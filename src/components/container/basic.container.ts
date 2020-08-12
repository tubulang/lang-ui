import { unmountComponentAtNode } from 'react-dom'

export default class basicContainer {
  private _container: HTMLDivElement | undefined

  protected __create(className?: string): HTMLDivElement {
    this._container = document.createElement('div')

    if (className) {
      this._container.setAttribute('className', className)
    }

    document.body.appendChild(this._container)

    return this._container
  }

  protected __destroy(): void {
    if (!this._container) {
      return
    }
    unmountComponentAtNode(this._container)
    document.body.removeChild(this._container)
    this._container = undefined
  }
}
