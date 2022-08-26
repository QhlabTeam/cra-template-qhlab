import {RiMouseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

import {Container, Heading, Contents} from './styles';

export function Intro() {
  return (
    <Container className='Intro'>
      <Heading>Welcome to Qhlab</Heading>

      <Contents>
        <span>→ Check out the example page of</span>
        <Link to='/posts'>
          Posts <RiMouseLine />
        </Link>
      </Contents>
    </Container>
  );
}
