import React from "react";
import Chat from "./components/Chat";
import Nav from './components/Nav'

const App = () => {
  const user = {
    id: "606519f5d022dc3ed177b5a5"
  };

  const activeContacts = [
    {
      name: "Henry Boyd",
      userTheme: "indigo",
    },
    {
      name: "Philip Tucker",
      userTheme: "red",
    },
    {
      name: "Christine Reid",
      userTheme: "pink",
    },
    {
      name: "Jerry Guzman",
      userTheme: "purple",
    },
    {
      name: "Mariano Vilarreal",
      userTheme: "blue",
    },
    {
      name: "Christian Faccio",
      userTheme: "green",
    },
    {
      name: "Jorge Arias",
      userTheme: "yellow",
    },
    {
      name: "Jona Aliendro",
      userTheme: "gray",
    },
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