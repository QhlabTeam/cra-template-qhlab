import styled from '@emotion/styled';
import {rgba} from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const AddButton = styled.button`
  color: royalblue;
  border: 1px solid ${rgba('royalblue', 0.3)};
  font-weight: bold;
  background-color: ${rgba('royalblue', 0.1)};
  padding: 8px;
  padding-right: 16px;
  gap: 4px;
  border-radius: 8px;
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
