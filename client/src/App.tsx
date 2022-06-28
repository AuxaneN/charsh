import './App.css'
import axios from "axios"
import {useEffect} from 'react'
//Theme
import {ThemeProvider} from 'styled-components'
import defaultTheme from './styles/defaultTheme'

// Store
import {userStore} from "./stores/userStore"

// Router
import {BrowserRouter, Routes, Route} from "react-router-dom"

// Components
import Nav from "./components/Nav/Nav"
import Content from "./components/Content/Content"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Logout from "./components/Logout/Logout"
import Register from "./components/Register/Register"
import Messages from "./components/Messages/Messages"
import Characters from "./components/Characters/Characters"
import Character from "./components/Character/Character"

const App = () => {

  let token:string;
  const setToken = userStore((state) => state.setToken)
  const localToken = localStorage.getItem("token")

  useEffect(()=>{
    console.log("should be first")

    if (localToken){
      setToken(localToken)
    }
    console.log("Apptsx fires once")
  },[])

  token = userStore((state) => state.token)
  // SETUP Axios config for requests
  if (localToken){
    axios.defaults.headers.common["Authorization"] = localToken
  }
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.withCredentials = false

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
      <Messages />
      <BrowserRouter>
        <Nav loggedIn={token ? true : false}/>
        <Content>
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register/> } />
              <Route path="/characters" element={<Characters/> } />
              <Route path="/characters/:id" element={<Character /> } />
            </Routes>
            <p className="credits">
            Made with 💖 by <a href="https://twitter.com/casyus" target="_blank" rel="no-referrer no-opener">@casyus</a>
            </p>
          </>
        </Content>
      </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
