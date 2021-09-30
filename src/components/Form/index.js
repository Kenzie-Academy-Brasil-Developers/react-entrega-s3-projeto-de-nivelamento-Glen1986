import {useForm} from 'react-hook-form';
const Form = ({title, products, setProducts}) => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmitFunction = (data) => {
    setProducts(
      [...products, data]
    )
    console.log(data)
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input type="text"
          placeholder={"code"}
          {...register("code")}
        ></input>
        <input placeholder={"name"}
          {...register("name")}
        ></input>
        <input placeholder={"descricao"}
          {...register("description")}
        ></input>
        <input placeholder={"preco"}
          {...register("price")}
        ></input>
        <input placeholder={"desconto"}
          {...register("discount")}
        ></input>
        <button
          type={"submit"}
        >{title}</button>
      </form>
    </div >
  )
}
export default Form;
