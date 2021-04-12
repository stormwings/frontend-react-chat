import { useDispatch, useSelector } from 'react-redux';
import { urlChat } from '../urls';
import Http from './../../utils/http';
import * as types from '../types';

export const fetchChats = (userId) => (dispatch) => {
  dispatch({ type: types.FETCH_CHATS_PENDING });

  Http.instance
    .get(`${urlChat}/${userId}`)
    .then(({ body }) => {
      dispatch({
        type: types.FETCH_CHATS_FULLFILLED,
        payload: { chats: body },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_CHATS_REJECTED,
        payload: { error },
      });
    });
};

export const useChatsReducer = () => {
  const { chatsReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getChats = (userId) => {
    dispatch(fetchChats(userId));
  };

  const setChat = (chatId) => {
    dispatch({ 
      type: types.SELECT_CHAT,
      payload: { chatId },
    });
  }

  const chatsActions = {
    getChats,
    setChat,
  };

  return { chatsReducer, chatsActions };
};