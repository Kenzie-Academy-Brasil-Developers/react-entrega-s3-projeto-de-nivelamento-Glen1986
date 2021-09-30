import {useForm} from 'react-hook-form';
//import {yupResolver} from '@hookform/resolvers/yup';
//import * as yup from 'yup';
import {useState, useEffect} from 'react';

const Form = ({title, products, setProducts}) => {


  /*
  const [code, setCode] = useState([]);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [discount, setDiscount] = useState([]);
   
     const schema = yup.object().shape({
       code: yup.string().required("code obrigatorio"),
       name: yup.string().required("nome obrigatorio"),
       description: yup.string(),
       price: yup.string(),
       discount: yup.string().required("sua data de nacimento").matches("^[0-9]{2}/([0-9]{2}/[0-9]{2})", "cada valor tem que ir separado com um '/'"),
       
})*/
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
          {...register("deacription")}
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
