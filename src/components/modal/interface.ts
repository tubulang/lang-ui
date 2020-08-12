type Size = 'default' | 'lg' | 'sm'

export const defaultProps = {
  size: 'default' as Size,
}

export type ModalProps = {
  visible: boolean
  onHide?: () => void
  className?: string
} & Partial<typeof defaultProps>
