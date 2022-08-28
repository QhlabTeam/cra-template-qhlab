import {rgba} from 'polished';

const colors = {
  primary: '#415EC9',
  text: '#000D1A',
  background: '#F6F7F8',
  get blacks() {
    const base = '#000D1A';
    return {
      base,
      90: rgba(base, 0.9),
      80: rgba(base, 0.8),
      70: rgba(base, 0.7),
      60: rgba(base, 0.6),
      50: rgba(base, 0.5),
      40: rgba(base, 0.4),
      30: rgba(base, 0.3),
      20: rgba(base, 0.2),
      10: rgba(base, 0.1),
      4: rgba(base, 0.04),
    };
  },
  get whites() {
    const base = '#FFFFFF';
    return {
      base,
      90: rgba(base, 0.9),
      80: rgba(base, 0.8),
      70: rgba(base, 0.7),
      60: rgba(base, 0.6),
      50: rgba(base, 0.5),
      40: rgba(base, 0.4),
      30: rgba(base, 0.3),
      20: rgba(base, 0.2),
      10: rgba(base, 0.1),
      4: rgba(base, 0.04),
    };
  },
};

export const THEME = {
  colors,
};
