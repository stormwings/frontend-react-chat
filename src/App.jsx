import React from "react";
import Chat from "./components/Chat";
import Nav from './components/Nav'
import { useUsersReducer } from "./redux/actions/userActions";
import { useChatsReducer } from "./redux/actions/chatActions";
import { useMessagesReducer } from "./redux/actions/messageActions";

const account = {
  _id: "606fac61815c5d139eb553f5"
};

const App = () => {
  const { usersReducer, usersActions } = useUsersReducer();
  const { chatsReducer, chatsActions } = useChatsReducer();
  const { messagesReducer, messagesActions } = useMessagesReducer();

  React.useEffect(() => {
    usersActions.getUsers();
    chatsActions.getChats(account._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onOpenChat = (receptorId) => {
    const findChatFromReducer = (chat) =>
      chat.users[0]._id === receptorId ||
      chat.users[1]._id === receptorId;

    const chat = chatsReducer.chats.find(
      findChatFromReducer
    );

    chatsActions.setChat(receptorId)

    messagesActions.getMessages(chat._id);
  }

  const onSendMessage = (message) => {
    const { selectedChat } = chatsReducer;
    const { _id: userId } = account;

    messagesActions.addMessage(selectedChat, message, userId);
  }

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <Nav
          account={account}
          contacts={usersReducer.users}
          onClick={onOpenChat}
        />
        {
          chatsReducer.selectedChat &&
            <Chat
              messages={messagesReducer.messages}
              user={account}
              onSendMessage={onSendMessage}
            />
        }
      </div>
    </div>
  );
};

export default App;