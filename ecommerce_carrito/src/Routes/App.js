import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrito from '../Containers/Carrito';
import Producto from '../Containers/Producto';
import Home from '../Containers/Home';
import Layout from '../Components/Layout';
function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Layout> 
      <Routes>
        <Route exact path = "/" element={<Home />}></Route>
        <Route exact path = "/Carrito" element={<Carrito />}></Route>
        <Route exact path = "/Producto" element={<Producto />}></Route>
      </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
