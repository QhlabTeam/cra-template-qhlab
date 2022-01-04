import {css} from '@emotion/react';
import {images} from '../../assets';

export function HomePage() {
  return (
    <div
      className='HomePage'
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <img alt='logo' src={images.logo} />
    </div>
  );
}
