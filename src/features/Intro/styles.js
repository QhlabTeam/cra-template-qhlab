import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 10px;
`;
const gradientAni = keyframes`
  to {
    background-position: 200%;
  }
`;
export const Heading = styled.h1({
  fontSize: 70,
  textAlign: 'center',
  lineHeight: 1.1,
  marginBottom: 40,
  fontFamily: 'SF Pro Display',
  fontWeight: 900,
  background:
    'linear-gradient(to right, royalblue, hotpink, hotpink, royalblue)',
  backgroundSize: '200%',

  animation: `${gradientAni} 2s linear infinite`,
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});
export const Contents = styled.div({
  textAlign: 'center',
  fontSize: 18,
  fontStyle: 'italic',
  color: 'grey',

  a: {
    background: 'linear-gradient(to right bottom, royalblue, hotpink)',
    color: 'white',
    padding: '4px 8px',
    fontWeight: 'bold',
    borderRadius: 4,
    margin: '0 6px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
  },

  code: {
    backgroundColor: 'lavender',
    fontSize: 14,
    padding: 4,
  },
});
