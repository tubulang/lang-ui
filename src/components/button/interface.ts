import { ButtonHTMLAttributes } from 'react'

export type ButtonType = 'default' | 'primary' | 'text' | 'link'
export type ButtonSize = 'default' | 'sm' | 'lg'
export type ButtonShape = 'default' | 'circle' | 'round'
type OmitAttrs = 'type' | 'disabled'
type ButtonHtmlType = 'button' | 'submit' | 'reset'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, OmitAttrs> {
  type?: ButtonType
  size?: ButtonSize
  danger?: boolean
  loading?: boolean
  shape?: ButtonShape
  disabled?: boolean
  htmlType?: ButtonHtmlType
}
