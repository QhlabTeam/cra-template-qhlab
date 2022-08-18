import {env} from '../../constants/env';

export function setupMocks() {
  if (env.ENABLE_MSW) {
    const {worker} = require('./browser');
    worker.start();
  }
}
