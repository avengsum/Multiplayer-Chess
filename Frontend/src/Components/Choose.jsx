import React from 'react'
import { Link } from 'react-router-dom'

const Choose = () => {
  return (
  <div className="h-screen flex justify-center items-center">
      <Link to={'/choose'}> <button className="px-4 py-3 bg-blue-500 text-white rounded-md mr-4">Create a Room</button>
      </Link>
      <button className="px-4 py-3 bg-blue-500 text-white rounded-md">Join a Room</button>
  </div>

  )
}

export default Choose