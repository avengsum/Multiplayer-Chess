import React from 'react';
import { Link } from 'react-router-dom';

const Choose = ({ btn1, btn2, link1, link2 }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <button className="px-4 py-3 bg-blue-500 text-white rounded-md mr-4">
        <Link to={link1}>{btn1}</Link>
      </button>

      <button className="px-4 py-3 bg-blue-500 text-white rounded-md">
        <Link to={link2}>{btn2}</Link>
      </button>
    </div>
  );
};

export default Choose;
