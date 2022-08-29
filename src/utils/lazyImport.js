import React from 'react';

export function lazyImport(factory, name) {
  return React.lazy(() =>
    factory().then((module) => ({default: module[name]}))
  );
}
