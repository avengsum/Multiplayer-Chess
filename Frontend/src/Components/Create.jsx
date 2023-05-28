import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

const Create = () => {

  const formik = useFormik({
    initialValues:{
      CreatorName:'',
      RoomName:'',
      RoomDescription:''
      
    },
    validationSchema:Yup.object({
      CreatorName:Yup.string().required("Creator Name is required"),
      RoomName:Yup.string().required("Room Name is required"),
      RoomDescription:Yup.string().required("Room Description is required")
    }),
    onSubmit:values => {
      (JSON.stringify(values,null,2))
    }

  })

  const handleSubmit = () => {
    try {
      axios.post('/createRoom',{
      CreatorName : formik.values.CreatorName,
      RoomName : formik.values.RoomName,
      RoomDescription : formik.values.RoomDescription,
    })
    alert("Room created")
    } catch (error) {
      alert("There is an error")
    }
  }



  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Create a New Chess Room
        </h1>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="CreatorName" className="text-gray-700 font-bold">
              Creator's Name
            </label>
            <input
              type="text"
              id="CreatorName"
              name='CreatorName'
              value={formik.values.CreatorName}
              onChange={formik.handleChange}
              autoComplete="name"
              required
              className="appearance-none w-full rounded-md py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="RoomName" className="text-gray-700 font-bold">
              Room Name
            </label>
            <input
              type="text"
              name='RoomName'
              id="RoomName"
              value={formik.values.RoomName}
              onChange={formik.handleChange}
              className="appearance-none w-full rounded-md py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Enter room name"
            />
          </div>

          <div>
            <label htmlFor="RoomDescription" className="text-gray-700 font-bold">
              Room Description
            </label>
            <input
              type="text"
              name='RoomDescription'
              id="RoomDescription"
              value={formik.values.RoomDescription}
              onChange={formik.handleChange}
              className="appearance-none w-full rounded-md py-2 px-3 bg-gray-100 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Enter room description"
            />
          </div>

          <button
            type="submit"
            onClick={() => handleSubmit()}
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
