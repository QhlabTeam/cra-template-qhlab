import {env} from '../constants/env';

export function initMocks() {
  if (env.ENABLE_MSW) {
    const {worker} = require('./browser');
    worker.start();
  }
}
