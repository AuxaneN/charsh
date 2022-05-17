import {Link} from "react-router-dom"

const Nav = () => {
    return (
      <div className="h-full w-1/5 bg-green-500 inline-block">
          <Link to="/login">
            Login
          </Link>
          <Link to="/register">
          Register
          </Link>
      </div>
    )
  }

  export default Nav
