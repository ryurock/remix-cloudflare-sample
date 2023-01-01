export type PropsType = {}

export const Header = ({...props}: PropsType) => {
  const style = {
    border: 'solid'
  }
  return (
    <header style={style}>
      <h1>Header</h1>
    </header>
  )
}