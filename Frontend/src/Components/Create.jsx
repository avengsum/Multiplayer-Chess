import React from 'react'

const Create = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 '>
        <div className='max-w-md w-full space-y-8'>
          <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
           Create a New Chess Room</h1>  
        </div>
        
        <form>
            <label htmlFor="">Creator's Name</label>
            <input type="text" />
            <label htmlFor="">Room Name</label>
            <input type="text" />
            <label htmlFor="">Room Description</label>
            <input type="text" />
        </form>
    </div>
  )
}

export default Create