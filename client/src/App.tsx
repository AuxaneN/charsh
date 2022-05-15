import './App.css'
import axios from "axios"

import {userStore} from "./stores/userStore"

const App = () => {

  const {token, register} = userStore((state) => state)
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common["Authorization"] = token
  axios.defaults.withCredentials = false

  return (
    <div className="App">
        <div onClick={()=> register("tesooeu@test.com", "aostaost")}>
        Register
        </div>
        <h1>
          The user token is {`${token}`}
        </h1>
    </div>
  )
}

export default App
