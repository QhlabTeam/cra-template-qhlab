import styled from '@emotion/styled';

export const Image = styled.img((props) => ({
  width: props.size ?? props.width ?? '100%',
  height: props.size ?? props.height ?? '100%',
  objectFit: props.fit ?? 'contain',
  flexShrink: 0,
}));
Image.displayName = 'Image';
