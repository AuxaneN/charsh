import ContentStyle from "./ContentStyle"
interface IContent {
  children: JSX.Element;
}

const Content = ({children}:IContent) => {
  return (
    <ContentStyle>
      {children}
    </ContentStyle>
  )
}

export default Content
