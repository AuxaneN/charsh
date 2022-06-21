import {userStore} from '../../stores/userStore'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Logout = () => {
  const {logout} = userStore((state) => state)
  const navigate = useNavigate()
  useEffect(()=>{
    logout()
    navigate("/", {replace:true} )
  }, [logout])

  return (
    <div>
    Logging out...
    </div>
  )
}

export default Logout
