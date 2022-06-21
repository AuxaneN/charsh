import create from "zustand"
import axios from "axios"
import {appStore} from "./appStore"

type userState = {
  user?:string
  token:string
  setToken:(localToken:string)=>void
  login: (email:string, password:string) => Promise<boolean|void>
  logout: ()=>void
  register: (email:string, password:string) => Promise<boolean|void>
}
const {setMessage} = appStore.getState()

export const userStore = create<userState>((set) => ({
  user:"",
  token:"",
  setToken: (localToken) => {
    set(()=>({token:localToken}))
  },
  login: async(email, password) => {
    const config = {
      headers : {"Content-Type":"application/json"}
    }
    const body = {
        email,
        password
    }
    try{

      let res = await axios.post("/api/v1/user/login",JSON.stringify(body), config)

      console.log(res)
      set(()=>({token:res.data.token}))
      setMessage("Login successful")
      localStorage.setItem("token", res.data.token)
      return(res.data.success)

    }catch(err:any){
      console.log(err)
      setMessage(err)

      return false
    }
  },
  logout: ()=> {
    localStorage.removeItem("token")
    set(()=>({token:""}))
    setMessage("Logout Successful")
  },
  register: async (email, password) => {
    const {setMessage} = appStore.getState()

    const config = {
      headers : {"Content-Type":"application/json"}
    }
    const body = {
        email,
        password
    }
    try{
      let res = await axios.post("/api/v1/user/register",JSON.stringify(body), config)

      console.log(res)
      set(()=>({token:res.data.token}))
      setMessage("Successfully registered, welcome!")

      return(res.data.success)

    }catch(err:any){
      setMessage("An error happened while creating the account!")
    }
  }
}))
