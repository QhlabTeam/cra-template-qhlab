import styled from '@emotion/styled';
import {RiInformationFill} from 'react-icons/ri';

const Container = styled.div`
  width: 100%;
  width: 250px;
  overflow: hidden;
  background-color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 40px 20px -10px rgba(0, 0, 0, 0.04),
    0 40px 60px 30px rgba(0, 0, 0, 0.04);
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  word-break: break-all;

  svg {
    flex-shrink: 0;
  }
`;

const Message = styled.p`
  color: gray;
  font-size: 14px;
`;

export function Notification({id, title, message}) {
  return (
    <Container className={`Notification${id}`}>
      {title && (
        <Title>
          <RiInformationFill /> {title}
        </Title>
      )}
      {message && <Message>{message}</Message>}
    </Container>
  );
}
