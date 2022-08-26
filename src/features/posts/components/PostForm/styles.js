import styled from '@emotion/styled';
import {rgba} from 'polished';

import {AddButton} from '../PostList/styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TextInput = styled.input`
  width: 100%;
  border: none;
  border: 1px solid lavender;
  padding: 8px;
  font-size: 20px;
  border-radius: 4px;
`;
TextInput.defaultProps = {
  type: 'text',
};
export const TextArea = styled.textarea`
  ${TextInput.__emotion_styles}
  border: 1px solid lavender;
  border-radius: 4px;
`;
export const SubmitButton = styled(AddButton)`
  padding: 12px 0;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
export const CancelButton = styled(SubmitButton)`
  background-color: ${rgba('orangered', 0.1)};
  color: orangered;
  border-color: ${rgba('orangered', 0.2)};
`;
