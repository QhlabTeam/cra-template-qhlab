import styled from '@emotion/styled';
import {rgba, size} from 'polished';

import {Image} from '../../../../components/elements/Image';
import {MEDIA} from '../../../../constants/media';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AddButton = styled.button`
  color: royalblue;
  border: 1px solid ${rgba('royalblue', 0.3)};
  font-weight: bold;
  background-color: ${rgba('royalblue', 0.1)};
  padding: 8px;
  padding-right: 16px;
  gap: 4px;
  border-radius: 8px;
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style-type: none;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;

  ${MEDIA.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${MEDIA.sm} {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 300px;
  min-width: 200px;
  flex-shrink: 0;
  overflow: hidden;
  background-color: white;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
`;

export const ListItemHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ListItemAuthor = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  strong {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  time {
    opacity: 0.4;
  }
`;

export const ListItemAvatar = styled(Image)`
  ${size(40)}
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 6px 10px ${rgba('royalblue', 0.14)};
`;

export const ListItemCover = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
`;

export const ListPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ListPaginationButton = styled.button`
  padding: 14px 20px;
  border-radius: 8px;
  color: royalblue;
  background-color: ${rgba('royalblue', 0.1)};
  display: inline-flex;
  align-items: center;
`;
