interface IContent {
  children: JSX.Element;
}

const Content = ({children}:IContent) => {
  return (
    <div className="w-4/5 inline-block">
      {children}
    </div>
  )
}

export default Content
