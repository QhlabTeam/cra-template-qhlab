import {Helmet} from 'react-helmet-async';

import {CONFIG} from '../constants/config';

/** @param {React.ComponentProps<typeof Helmet>} */
export function Head({title, children, ...rest}) {
  return (
    <Helmet {...rest}>
      <title>
        {title
          ? `${title} | ${CONFIG.helmet.baseTitle}`
          : CONFIG.helmet.baseTitle}
      </title>
      {children}
    </Helmet>
  );
}
