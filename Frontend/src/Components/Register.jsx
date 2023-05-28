import { useState ,useCallback } from "react"
import { useFormik } from "formik"
import { FaEnvelope, FaLock } from 'react-icons/fa';
import * as Yup from 'yup'
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
const formik = useFormik({
    initialValues:{
        name:'',
        email:'',
        password:''
    },
    validationSchema: Yup.object({
        name:Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    }),
    onSubmit:values => {
        (JSON.stringify(values,null,2))
    }
  })

  console.log()
  const handleSubmit = async () => {
    try {
      await axios.post('/register',{
        name:formik.values.name,
        email:formik.values.email,
        password:formik.values.password

    })
    alert("register succesfull now login")
    } catch (error) {
      alert("there is an error")
    }
}

    return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register
            </h2>
          </div>
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
               <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input id="name"
                  name="name" type="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  autoComplete="name" required className="appearance-none rounded-none relative block w-full 
                  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                   placeholder="Name" />
                   {formik.touched.name && formik.errors.name ? 
                   <div className="text-red-500"> {formik.errors.name}</div> : null}
                </div>
              </div> 
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input id="email"
                  name="email" type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoComplete="email" required className="appearance-none rounded-none relative block w-full 
                  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                   placeholder="Email address" />
                   {formik.touched.email && formik.errors.email ? 
                   <div className="text-red-500"> {formik.errors.email}</div> : null}
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input id="password" name="password" type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  autoComplete="current-password" required
                  className="appearance-none rounded-none relative
                  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                  text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500
                  focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
                  { formik.errors.email ? 
                   <div className="text-red-500"> {formik.errors.password}</div> : null}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Have an account 
              </div>
              <div className="text-sm">
                <Link to={'/login'}><p className=" cursor-pointer font-medium text-blue-600 hover:text-blue-500">
                  Login
                </p> </Link>
              </div>
            <div>
             {formik.values.file && <span>{formik.values.file.name}</span>}
            </div> 
            </div>
            <div>
              <button type="submit"
              onClick={() => handleSubmit()} 
              className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue">
                Register
              </button>
              </div>
            </form>
  </div>
  </div>
    )
}

export default Register