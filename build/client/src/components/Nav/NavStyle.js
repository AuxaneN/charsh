import styled from "styled-components";
const NavStyle = styled.nav `
  // General
  width:100%;
  height:2.5rem;
  position:fixed;
  bottom:0;
  z-index:99;
  vertical-align: top;

  background:${props => props.theme.ligthBg};
  box-shadow:${props => props.theme.shadowMenu};

  svg{
    width: 1.5rem;
    height: 1.5rem;
  }
  .static-blocks{
    display: block;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .floating-blocks{
    display: flex;
    position: absolute;
    right: 0.75rem;
    background-color:${props => props.theme.ligthBg};
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    width: 3rem;
    height: 6rem;
    top: -7rem;
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme.shadowLow};

  }
  // Tablets and up
  @media screen AND (min-width:768px){
    padding:1.5rem;
    box-shadow:${props => props.theme.shadowLow};
    height:100vh;
    width:16rem;
    flex-shrink:0;
    position: relative;

    .static-blocks{
      flex-direction: column;
      align-items: flex-start;
      height: 14rem;
    }
    .floating-blocks{
      display: block;
      bottom: 0px;
      top: auto;
      right: auto;
      width: auto;
      height: auto;
      border-radius: 0;
      box-shadow: none;
    }

  }
`;
export default NavStyle;
//# sourceMappingURL=NavStyle.js.map