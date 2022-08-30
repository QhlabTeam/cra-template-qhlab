import {CONFIG} from '../../constants/config';

export function setupMocks() {
  if (process.env.NODE_ENV === 'development' && CONFIG.enableMSW) {
    import('./browser').then(({worker}) => {
      worker.start();
    });
  }
}
