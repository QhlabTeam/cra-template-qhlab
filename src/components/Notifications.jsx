import styled from '@emotion/styled';
import {nanoid} from 'nanoid';
import {useState} from 'react';

import {Notification} from './Notification';
import {Portal} from './Portal';

const Container = styled.div`
  position: fixed;
  inset: 20px 20px auto auto;
  z-index: 1400;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const notificationsStore = {
  notifications: null,
  setNotifications: null,
};

export function Notifications() {
  const [notifications, setNotifications] = useState([]);

  notificationsStore.notifications = notifications;
  notificationsStore.setNotifications = setNotifications;

  return (
    <Portal>
      <Container className='Notifications'>
        {notifications.map((item) => (
          <Notification
            id={item.id}
            key={item.id}
            message={item.message}
            title={item.title}
          />
        ))}
      </Container>
    </Portal>
  );
}

export function useNotifications() {
  function show({title, message}) {
    const item = {title, message, id: nanoid()};
    notificationsStore.setNotifications((prev) => [item, ...prev]);
    setTimeout(() => {
      notificationsStore.setNotifications((prev) =>
        prev.filter((p) => p !== item)
      );
    }, 4000);
  }

  return {
    show,
  };
}
