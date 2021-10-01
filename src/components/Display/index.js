import {Container} from './styles';
const Display = ({products, title, addToCarr, children}) => {

  return (
    <Container>
      <div className="products">
        <span>{title}</span>
        <table>
          {products.map((item, index) =>
            <tr key={index}>
              <td className="code">code: {item.code} </td>
              <td className="quant">nome: {item.name} </td>
              <td className="description">descri&ccedil;&atilde;o: {item.description} </td>
              <td className="price">preco: {item.price} </td>
              <td className="discount" > disconto: {item.discount} </td>
              <td ><button onClick={() => addToCarr(item)}>{children}</button> </td>
            </tr>)}
        </table>
      </div >

    </Container >

  );
};
export default Display;


/*


*/
