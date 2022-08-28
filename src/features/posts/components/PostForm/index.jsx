import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {createPost} from '../../api/createPost';
import {CancelButton, Form, SubmitButton, TextArea, TextInput} from './styles';

export function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const hasUnmounted = useRef(false);

  const valid = title.trim() && content.trim();

  useEffect(() => {
    return () => {
      hasUnmounted.current = true;
    };
  }, []);

  function handleSubmit(ev) {
    ev.preventDefault();

    setIsLoading(true);
    createPost({title, body: content})
      .finally(() => {
        if (!hasUnmounted.current) {
          setIsLoading(false);
        }
      })
      .then(() => {
        navigate(-1);
      });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <TextInput
          placeholder='Title'
          type='text'
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <TextArea
          placeholder='Content'
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        />

        <SubmitButton disabled={!valid || isLoading} type='submit'>
          {isLoading ? 'Saving...' : 'Save'}
        </SubmitButton>

        <CancelButton
          hidden={isLoading}
          style={{marginTop: -10}}
          onClick={() => navigate(-1)}
        >
          Cancel
        </CancelButton>
      </Form>
    </div>
  );
}
