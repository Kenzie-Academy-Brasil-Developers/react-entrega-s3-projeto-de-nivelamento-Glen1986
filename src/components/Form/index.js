import {useState} from "react"
const Form = ({title, products, setProducts}) => {
  const [newProduct, setNewProduct] = useState({
    code: "",
    name: "",
    description: "",
    price: "",
    discount: "",
  })

  const onSubmitFunction = (e) => {
    e.preventDefault();
    setProducts(
      [...products, newProduct]
    )
    console.log(newProduct)
  }
  return (
    <div className="form">
      {console.log(newProduct)}
      <form onSubmit={onSubmitFunction}>
        <input type="text"
          value={newProduct.code}
          placeholder={"code"}
          onChange={(e) => setNewProduct({
            ...newProduct, code: e.target.value
          })}
        ></input>
        <input type="text"
          value={newProduct.name}
          placeholder={"name"}
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
        ></input>
        <input type="text"
          value={newProduct.description}
          placeholder={"descricao"}
          onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
        ></input>
        <input type="text"
          value={newProduct.price}
          placeholder={"preco"}
          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
        ></input>

        <input type="text"
          value={newProduct.discount}
          placeholder={"desconto"}
          onChange={(e) => setNewProduct({...newProduct, discount: e.target.value})}
        ></input>

        <button
          type={"submit"}
        >{title}</button>
      </form>
    </div >
  )
}
export default Form;
