import React from 'react'
import UserList from './UserList'
import PropTypes from 'prop-types'

const Nav = ({ contacts }) => {
  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <NavTitle
        title="QuickChat"
      />
      <div className="flex flex-col mt-8">
        <UserList
          title="Active Conversations"
          users={contacts}
        />
      </div>
    </div>
  );
}

Nav.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const NavTitle = ({ title }) => {
  return (
    <div className="flex flex-row items-center justify-center h-12 w-full">
      <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
        <ChatIcon />
      </div>
      <div className="ml-2 font-bold text-2xl">
        { title }
      </div>
    </div>
  );
}

NavTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

const ChatIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      ></path>
    </svg>
  )
}

export default Nav