import {css} from '@emotion/react';
import {Link} from 'react-router-dom';
import {images} from '../../assets';

export function NotFoundPage() {
  return (
    <div
      className='NotFoundPage'
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        color: slategray;
      `}
    >
      <h1>Not Found</h1>

      <Link
        replace
        css={css`
          background-color: whitesmoke;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 14px;
          margin-top: 8px;
        `}
        to='/'
      >
        Return Home
      </Link>

      <img
        alt='logo'
        css={css`
          filter: saturate(0.4);
          position: absolute;
          bottom: 50px;
          opacity: 0.2;
        `}
        height={50}
        src={images.logoOnly}
      />
    </div>
  );
}
