  import styled from "styled-components"

  const MessageStyle = styled.div`
    position: fixed;
    right: 0;
    padding: 1.25rem;
    margin: 0.75rem;
    background-color: ${props => props.theme.accent};
    border-radius: 0.375rem;

    // Tablets and up
    @media screen AND (min-width:768px){
    }
  `
export default MessageStyle
