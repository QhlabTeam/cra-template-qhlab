import {ENV} from '../../constants/env';

export function setupMocks() {
  if (ENV.enableMSW) {
    const {worker} = require('./browser');
    worker.start();
  }
}
