import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrito from '../Containers/Carrito';
import Producto from '../Containers/Producto';
import Home from '../Containers/Home';
import Layout from '../Components/Layout';
import UsarContexto from '../Context/UsarContexto';
function App() {

  return (
    <div className="App">
      <BrowserRouter> 
      <UsarContexto>
      <Layout> 
      <Routes>
        <Route exact path = "/" element={<Home />}></Route>
        <Route exact path = "/carrito" element={<Carrito />}></Route>
        <Route exact path = "/Producto" element={<Producto />}></Route>
      </Routes>
      </Layout>
      </UsarContexto>
      </BrowserRouter>
    </div>
  );
}

export default App;
