import create from "zustand"
import axios from "axios"

type userState = {
  user?:string,
  token:string
  login: (email:string, password:string) => Promise<boolean|void>
  register: (email:string, password:string) => void
}

export const userStore = create<userState>((set) => ({
  user:"",
  token:"",
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
      return(res.data.success)

    }catch(err:any){
      console.log(err)
      return false
    }
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
