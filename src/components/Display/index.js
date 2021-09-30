import {Container} from './styles';
const Display = ({products, title, onClick, children}) => {

  return (
    <Container>
      <div className="products">
        <span>{title}</span>
        <table>
          {products.map((item, index) =>
            <tr key={index}>
<<<<<<< HEAD
              <td className="code">code: {item.code} </td>
              <td className="quant">nome: {item.name} </td>
              <td className="description">descri&ccedil;&atilde;o: {item.description} </td>
              <td className="price">preco: {item.price}, </td>
              <td className="discount" > disconto: {item.discount} </td>
=======
              <td className="code">code: {item.code}, </td>
              <td className="quant">nome: {item.name}, </td>
              <td className="description">descri&ccedil;ao: {item.description} </td>
              <td className="price">preco: {item.price}, </td>
              <td className="discount" > disconto: {item.discount}, </td>
>>>>>>> 9b4b4cdfb618dc3812ace5a0616c33e97d37948a
              <td ><button onClick={() => onClick(item)}>{children}</button> </td>
            </tr>)}
        </table>
      </div >

    </Container >

  );
};
export default Display;


/*


*/
