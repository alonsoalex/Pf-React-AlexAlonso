import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
function App() {
  return (

<>
    <BrowserRouter>
   <Navbar/>
   <Routes> 

   <Route path='/' element={<ItemListContainer/>}/>
   <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
   <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>

   <Route path='/checkout' element={<Checkout/>}/>
   <Route path='/cart' element={<Cart/>}/>

   
   </Routes>
<Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
