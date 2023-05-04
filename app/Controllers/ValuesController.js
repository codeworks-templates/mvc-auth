import { AppState } from '../AppState.js'
import { valuesService } from '../services/ValuesService.js'
import { logger } from '../utils/Logger.js'

// Private
function _draw() {
  const values = AppState.values
  logger.log(values)
}

// Public
export class ValuesController {
  constructor() {
    AppState.on('values', _draw)
  }

  addValue() {
    valuesService.addValue()
  }
}
