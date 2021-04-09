import React from "react";
import Chat from "./components/Chat";
import Nav from './components/Nav'
import { useUsersReducer } from "./redux/actions/userActions";

const App = () => {
  const [usersReducer, usersActions] = useUsersReducer()

  React.useEffect(() => {
    usersActions.getUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const user = {
    id: "606fac61815c5d139eb553f5"
  };

  const activeContacts = [
    ...usersReducer.users
  ];

  const currentChatMessages = [
    {
      user: '606519f5d022dc3ed177b5a5',
      message: "hola",
      date: "2021-04-04T04:20:46.994+00:00",
      file: "",
    },
    {
      user: '60637dfbd7ace630ab529748',
      message: "ola k ase",
      date: "2021-04-04T04:20:46.994+00:00",
      file: "",
    },
    {
      user: '606519f5d022dc3ed177b5a5',
      message: "que queres",
      date: "2021-04-04T04:20:46.994+00:00",
      file: "",
    },
    {
      user: '60637dfbd7ace630ab529748',
      message: "kiere pelea?",
      date: "2021-04-04T04:20:46.994+00:00",
      file: "",
    },
  ];

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <Nav
          contacts={activeContacts}
        />
        <Chat
          messages={currentChatMessages}
          user={user}
        />
      </div>
    </div>
  );
};

export default App;