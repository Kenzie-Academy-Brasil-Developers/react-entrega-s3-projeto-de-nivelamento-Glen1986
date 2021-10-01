import {useState} from 'react';
import Carrinho from './components/Carrinho'
import Form from './components/Form'
import Display from './components/Display';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);
  const [carro, setCarro] = useState([]);

  const addToCarr = (obj) => {
    const found = carro.find(item => item.code === obj.code)
    console.log(found)
    if (!found) {
      setCarro([...carro, obj])
    }
  }

  const takeOff = (obj) => {
    const filtrados = carro.filter(item => item.name !== obj)
    setCarro([carro, ...filtrados])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>KenzieOfertas</h1>
        <Form
          products={products}
          setProducts={setProducts}
          title={"add"}
        ></Form>

        <Carrinho
          carro={carro}
          setCarro={setCarro}
          children={"Tira"}
          title={"carrinho"}
          takeOff={takeOff}
        >

        </Carrinho>
        <Display
          children={"add"}
          addToCarr={addToCarr}
          title={"products"}
          products={products}
          setProducts={setProducts}
        />
      </header>
    </div>
  );
}

export default App;
