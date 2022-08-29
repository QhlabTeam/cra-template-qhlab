export function lazyImport<
  T extends React.ComponentType<unknown>,
  I extends {[K2 in K]: T},
  K extends keyof I
>(factory: () => Promise<I>, name: K): I;
