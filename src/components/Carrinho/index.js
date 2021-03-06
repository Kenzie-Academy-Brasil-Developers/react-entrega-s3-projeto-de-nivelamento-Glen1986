import {Container} from './styles'
const Carrinho = ({carro, takeOff, children}) => {

   const valores = carro.map(item => item.price).reduce((a, b) => {return a + b}, 0)
   const desconto = carro.map(item => item.discount).reduce((a, b) => {return a + b}, 0)
   const total = () => {
      return valores - desconto
   };
   return (
      <Container>
         <div className="carrinho">
            <span>Carrinho</span>
            {carro.map((item, index) =>
               <tr id={index} key={index}>
                  <td className="code">code: {item.code} </td>
                  <td className="quant">nome: {item.name} </td>
                  <td className="description">descri&ccedil;&atilde;o: {item.description} </td>
                  <td className="price">preco: {item.price} </td>
                  <td className="discount" > disconto: {item.discount} </td>
                  <td ClassName="button" id={index}> <button onClick={(e) => takeOff(item.name)} >{children}</button> </td>
               </tr>)}
         </div>
         <div>Valor: {Math.floor(valores)}</div>
         <div>Desconto: {desconto}</div>
         <div>Total: {total().toFixed((2))}</div>
      </Container >
   )
}
export default Carrinho;
