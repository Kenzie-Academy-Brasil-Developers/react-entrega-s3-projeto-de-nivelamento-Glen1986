import {Container} from './styles'
const Carrinho = ({addCarro}) => {

   const valores = addCarro.map(item => item.price).reduce((a, b) => {return a + b}, 0)
   const desconto = addCarro.map(item => item.discount).reduce((a, b) => {return a + b}, 0)
   const total = () => {
      return valores - desconto
   };

   return (
      <Container>
         <div className="carrinho">
            <span>Carrinho</span>
            {addCarro.map((item, index) =>
               <tr key={index}>
                  <td className="code">code: {item.code}, </td>
                  <td className="quant">nome: {item.name}, </td>
                  <td className="description">descri&ccedil;&atilde;o: {item.description} </td>
                  <td className="description">descri&ccedil;ao: {item.description} </td>
                  <td className="price">preco: {item.price}, </td>
                  <td className="discount" > disconto: {item.discount}, </td>
               </tr>)}
         </div>
         <div>Valor: {Math.floor(valores)}</div>
         <div>Desconto: {desconto}</div>
         <div>Total: {total().toFixed((2))}</div>
      </Container>
   )
}
export default Carrinho;
