import React from 'react';

const Create = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Create a New Chess Room
        </h1>

        <form className="space-y-4">
          <div>
            <label htmlFor="creator-name" className="text-gray-700 font-bold">
              Creator's Name
            </label>
            <input
              type="text"
              id="creator-name"
              autoComplete="name"
              required
              className="appearance-none w-full rounded-md py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="room-name" className="text-gray-700 font-bold">
              Room Name
            </label>
            <input
              type="text"
              id="room-name"
              className="appearance-none w-full rounded-md py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Enter room name"
            />
          </div>

          <div>
            <label htmlFor="room-description" className="text-gray-700 font-bold">
              Room Description
            </label>
            <input
              type="text"
              id="room-description"
              className="appearance-none w-full rounded-md py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Enter room description"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Create Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
