import {useState, useEffect} from 'react'
import api from './api'
import Produto from './components/produto'
import Formulario from './components/form/index'


export default function App() {
  const [x, setX] = useState([])

  useEffect(async () => {
      const dados = await api()
      setX(dados)
  }, [])

  const lista = x.map(item => ( <Produto dados={item} /> ))

  return (
    <div className="App">
      <header className="App-header">
        Seja bem vindo a  EpicStore
      </header>

      <main>
        <h3>Produtos</h3>

       <Formulario />

        <div id="mostruario">
          {lista}
        </div>
      </main>
    </div>
  );

}


