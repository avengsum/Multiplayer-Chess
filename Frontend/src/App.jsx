import { Link } from "react-router-dom"
import Login from "./Components/Login"
import axios from "axios"

function App() {

  axios.defaults.withCredentials = true;
  
  return (
    <>
      <Link to={'/login'} ><button>Login</button></Link>
    </>
  )
}

export default App
