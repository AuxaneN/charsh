import create from "zustand"
import axios from "axios"
import {appStore} from "./appStore"

type userState = {
  user?:string
  token:string
  login: (email:string, password:string) => Promise<boolean|void>
  register: (email:string, password:string) => Promise<boolean|void>
}

export const userStore = create<userState>((set) => ({
  user:"",
  token:"",
  login: async(email, password) => {
    const {setMessage} = appStore.getState()

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
      return(res.data.success)

    }catch(err:any){
      console.log(err)
      setMessage(err)

      return false
    }
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
