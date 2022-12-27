import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Chef from './components/chef/Chef';
import Feature from './components/feature/Feature';
import FeatureBurger from './components/featureBurger/FeatureBurger';
import { Route, Routes } from 'react-router-dom';
import CartDetails from './components/cartDetails/CartDetails';
import Card from './components/card/Card';
import Home from './components/home/Home';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/featureBurger' element={<FeatureBurger />}></Route>
        <Route path='/feature' element={<Feature />}></Route>
        <Route path='/chef' element={<Chef />}></Route>
        <Route path='/cardDetails/:id' element={<CartDetails />}></Route>
        <Route path='/card' element={<Card />}></Route>
      </Routes>




      <Footer></Footer>
    </div >
  );
}

export default App;
