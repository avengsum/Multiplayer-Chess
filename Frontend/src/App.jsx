import { Link } from "react-router-dom"
import Login from "./Components/Login"

function App() {
  
  return (
    <>
      <Link to={'/login'} ><button>Login</button></Link>
    </>
  )
}

export default App
