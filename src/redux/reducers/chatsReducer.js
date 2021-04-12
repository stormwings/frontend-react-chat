import * as types from "../types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  chats: [],
  selectedChat: null,
};

const handleReceivedChats = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    chats: [...action.payload.chats],
  };
};

const handleErrorOnFetch = (state, action) => {
  return {
    ...state,
    loading: false,
    chats: [],
    error: action.payload.error,
  };
};

const handleOnSelectChat = (state, action) => {
  return {
    ...state,
    selectedChat: action.payload.chatId
  }
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_CHATS_FULLFILLED: {
      return handleReceivedChats(state, action);
    }
    case types.FETCH_CHATS_REJECTED: {
      return handleErrorOnFetch(state, action);
    }
    case types.SELECT_CHAT: {
      return handleOnSelectChat(state, action);
    }
    default:
      return state;
  }
};

export default reducer;
