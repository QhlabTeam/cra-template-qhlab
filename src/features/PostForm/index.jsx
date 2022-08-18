import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Container, Header} from '../Posts/styles';
import {createPost} from './api/createPost';
import {CancelButton, Form, SubmitButton, TextArea, TextInput} from './styles';

export function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const valid = title.trim() && content.trim();

  function handleSubmit(ev) {
    ev.preventDefault();

    setIsLoading(true);
    createPost({title, body: content})
      .finally(() => {
        setIsLoading(false);
      })
      .then(() => {
        navigate(-1);
      });
  }

  return (
    <Container>
      <Header>
        <h1>New Post</h1>
      </Header>

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
    </Container>
  );
}
