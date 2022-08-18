import {Container, Header} from '../Posts/styles';
import {CancelButton, Form, SubmitButton, TextArea, TextInput} from './styles';

export default {};

export const Basic = (args) => (
  <Container>
    <Header>
      <h1>New Post</h1>
    </Header>

    <Form onSubmit={(ev) => ev.stopPropagation()}>
      <TextInput placeholder='Title' type='text' value={args.title} />
      <TextArea placeholder='Content' value={args.content} />

      <SubmitButton disabled={!args.valid || args.isLoading} type='submit'>
        {args.isLoading ? 'Saving...' : 'Save'}
      </SubmitButton>

      <CancelButton hidden={args.isLoading} style={{marginTop: -10}}>
        Cancel
      </CancelButton>
    </Form>
  </Container>
);

Basic.args = {
  title: '',
  content: '',
  valid: false,
  isLoading: false,
};
