export type Kind = 'info' | 'positive' | 'negative' | 'warning'

export type KindMap = Record<Kind, string>

export type AlertProps = {
  children?: React.ReactElement | string
  className?: string
} & Partial<typeof defaultProps>

export const defaultProps = {
  /**
   * default info
   */
  kind: 'info' as Kind,
}
