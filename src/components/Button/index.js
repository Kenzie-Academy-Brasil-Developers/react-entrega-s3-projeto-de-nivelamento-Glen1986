const Button = ({onSubmit, title, }) => {
  return (
    <>
      <button
        onSubmit={onSubmit}
      >{title}</button>
    </>
  )
}
export default Button
