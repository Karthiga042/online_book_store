import './App.css';
import Terms from './Components/Terms/Terms';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import Privacy from './Components/Privacy/Privacy';
import Faq from './Components/Faq/Faq';
import Signup from './Pages/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import Address from './Components/Address/Address';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Header/>
        <Routes>

          <Route path='/' element={<Shop />}/>

          <Route path='/newarrivals' element={<ShopCategory category="newarrivals"/>}/>
          <Route path='/bestsellers' element={<ShopCategory category="bestsellers"/>}/>
          <Route path='/awardwinners' element={<ShopCategory category="awardwinners" />}/>
          <Route path='/fictionbooks' element={<ShopCategory category="fictionbooks" />}/>
          <Route path='/featuredauthors' element={<ShopCategory category="featuredauthors" />}/>
          <Route path='/terms' element={<Terms />}/>
          <Route path='/privacy' element={<Privacy />}/>
          <Route path='/faq' element={<Faq />}/>

          <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<product/>}/>
          </Route>

          <Route path='/Cart' element={<Cart />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='/checkout' element={<Checkout/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
