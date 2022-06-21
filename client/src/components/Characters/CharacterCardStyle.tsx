import styled from 'styled-components'

const CharacterCardStyle = styled.div`
  height:auto;
  padding:12px 12px;
  margin:24px;
  box-shadow:${props => props.theme.shadowHigh};
  border-radius:${props => props.theme.radiusMd};
  color:${props => props.theme.hoverPrimary};
  transition: all 0.3s ease-out;
  display:inline-block;
  width:200px;
  line-height:0px;
  vertical-align:middle;
  
  &:hover{
    color:white;
    cursor:pointer;
    box-shadow:${props => props.theme.shadowLow};
    background:${props => props.theme.hoverPrimary};
    transition: all 0.3s ease-out;
  }

  .picture{
    display:inline-block;
    vertical-align:middle;
    margin-right:12px;
    background:lightgray;
    height:60px;
    width:60px;
    border-radius:100%;
  }
`

export default CharacterCardStyle
