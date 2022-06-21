import NavItemStyle from "./NavItemStyle"

interface IProps {
children:JSX.Element,
name:string,
url:string
}

const NavItem = ({ name,url, children }:IProps) => {
  return (
    <NavItemStyle to={url}>
      <span className="icon">
      {children}
      </span>
      <span className="text">
      {name}
      </span>
    </NavItemStyle>
  )
}

export default NavItem
