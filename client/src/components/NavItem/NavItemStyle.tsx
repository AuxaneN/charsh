  import styled from "styled-components"
  import {Link} from "react-router-dom"

  const NavItemStyle = styled(Link)`
    //Parent
    display: inline-block;
    color: ${props => props.theme.primary};
    font-weight: bold;
    height:auto;
    transition:color 0.2s ease-out;
    &:hover, &:active {
        color:${props => props.theme.accent};
        transition:color 0.2s ease-out;
    }

    // icon
    .icon{
      display:inline-block;
      color:currentColor;
      vertical-align: middle;
    }

    // text
    .text{
      display:none;
      color:currentColor;
      vertical-align:align-middle;
    }

    // Tablets and up
    @media screen AND (min-width:768px){
      margin-bottom:1.25rem;
      display:block;

      .icon{
        padding-right:0.5rem;
      }
      .text{
        display:inline-block;
      }

    }
  `
export default NavItemStyle
