import {ENV} from '../../constants/env';

export function setupMocks() {
  if (process.env.NODE_ENV === 'development' && ENV.enableMSW) {
    const {worker} = require('./browser');
    worker.start();
  }
}
