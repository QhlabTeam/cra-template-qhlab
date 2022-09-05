import {ErrorFallback} from './ErrorFallback';

export default {component: ErrorFallback};

export const Basic = (args) => (
  <ErrorFallback error={new Error(args.fakeErrorMsg)} />
);
Basic.args = {
  fakeErrorMsg: 'A fake error shows up',
};
