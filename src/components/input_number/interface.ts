import { InputHTMLAttributes } from 'react'

export type OmitAttrs = 'defaultValue' | 'onChange' | 'size'
export type NumberVal = number | string | null

export interface InputNumberProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, OmitAttrs> {
  defaultValue?: number
  value?: number | string
  onChange?: (value: NumberVal) => void
}
