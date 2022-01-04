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

        img {
          width: 100%;
          max-width: 500px;
        }
      `}
    >
      <img alt='logo' src={images.logo} />
    </div>
  );
}
