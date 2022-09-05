import {Notifications, useNotifications} from '.';

/** @type {import('@storybook/react').Meta} */
export default {
  component: Notifications,
};

export const Basic = (args) => {
  const {show} = useNotifications();

  return (
    <>
      <button
        onClick={() =>
          show({
            title: 'Hello World',
            message:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nulla. Nihil, saepe!',
          })
        }
      >
        Show Notification
      </button>

      <Notifications />
    </>
  );
};
