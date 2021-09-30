import {Container} from './styles';
const Display = ({products, title}) => {
  return (
    <Container>
      <div className="products">
        <span>{title}</span>
        <table>
          <tr>{products.map(item => <td className="code">code: {item.code}, </td>)} </tr>
          <tr>{products.map(item => <td className="quant">nome: {item.name}, </td>)} </tr>
          <tr>{products.map(item => <td className="description">descriçao: {item.description} </td>)} </tr>
          <tr>{products.map(item => <td className="price">preco: {item.price}, </td>)} </tr>
          <tr>{products.map(item => <td className="discount" > disconto: {item.discount}, </td>)} </tr>
          <tr>{products.map(item => <td ><button
            type="submit"
          >click</button> </td>)} </tr>
        </table>
      </div >

    </Container >

  );
};
export default Display;


/*


*/
