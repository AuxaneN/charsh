import './App.css'
import axios from "axios"

// Store
import {userStore} from "./stores/userStore"

// Router
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Components
import Nav from "./components/Nav/Nav"
import Content from "./components/Content/Content"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Messages from "./components/Messages/Messages"
const App = () => {

  const {token} = userStore((state) => state)
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.common["Authorization"] = token
  axios.defaults.withCredentials = false

  return (
    <div className="App">
    <Messages />
    <BrowserRouter>
    <Nav />
    <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/> } />
        </Routes>
      </Content>
      </BrowserRouter>
    </div>
  )
}

export default App
