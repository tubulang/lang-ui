import _ from 'lodash'
import { NumberVal } from './interface'

const processValue = (value: NumberVal): number | null => {
  let result = !value && value !== 0 ? null : parseFloat(value + '')

  if (_.isNil(result) || isNaN(result)) {
    result = null
  }

  return result
}

export { processValue }
