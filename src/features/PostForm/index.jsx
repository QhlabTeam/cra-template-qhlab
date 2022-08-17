import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {createPost} from './api/createPost';
import {Form, SubmitButton, TextArea, TextInput} from './styles';

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
        navigate('/posts');
      });
  }

  return (
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
        {isLoading ? 'Creating...' : 'Create New Post'}
      </SubmitButton>
    </Form>
  );
}
