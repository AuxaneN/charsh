// Store
import {userStore} from "../../stores/userStore"
import {useState} from "react"

import {useNavigate} from "react-router-dom"

const Register= () => {
  const navigate = useNavigate()

  const {register} = userStore((state) => state)

  interface IData {
    email: string
    password: string
  }
  const [data, setData] = useState<IData>({
    email:"",
    password:""
  })

  const handleChange = <P extends keyof IData
  >(prop: P, value: IData[P]) => {
    setData({...data, [prop]: value})
  }

  const handleClick = async (e:React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement> ) => {
    e.preventDefault()
    let res = await register(data.email, data.password)
    console.log(res)
    if(res){
      navigate("/", {replace:true} )
      console.log("Logged in")
    }
  }

  return (
    <div>

    Register 
        <form>
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={(e) => {
              handleChange('email',  e.target.value)
            }}/>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              handleChange('password',  e.target.value)
            }}
          />
          <button
            onClick={(e)=>{
              handleClick(e)
            }}
            >
            Submit
          </button>
        </form>
        </div>

  )
}

export default Register
