import create from "zustand"
import axios from "axios"

type userState = {
  user?:string,
  token:string
  login: (email:string, password:string) => void
  register: (email:string, password:string) => void
}

export const userStore = create<userState>((set) => ({
  user:"",
  token:"",
  login:() => {

  },
  register:(email, password) => {
    const config = {
      headers : {"Content-Type":"application/json"}
    }
    const body = {
        email,
        password
    }
    axios.post("/api/v1/user/register",JSON.stringify(body), config)
    .then(
      (res:any) => {
        console.log(res)
        set(()=>({token:res.data.token}))
      }
    )
  }
}))
