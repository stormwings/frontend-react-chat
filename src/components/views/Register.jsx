import React from "react";

const Register = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            User registration
          </h1>
          <form className="mt-6" action="#" method="POST">
            {/* <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div> */}
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autocomplete
                required
              />
            </div>
            {/* <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
                minlength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Repeat Password</label>
              <input
                type="repeat_password"
                name=""
                id=""
                placeholder="Enter Password Again"
                minlength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div> */}
            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Register
            </button>
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <p className="mt-8">
            Have an account?{" "}
            <button
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Authenticate
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {};

export default Register;
