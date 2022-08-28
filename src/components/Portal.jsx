import {createPortal} from 'react-dom';

export function Portal({container = document.body, children}) {
  return createPortal(children, container);
}
