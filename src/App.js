
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header/Header';
import Store from './components/Store/Store';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route,Routes, Switch, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
   <>
   <Router>
    <CartProvider>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="store" element={<Store/>} />
    <Route path="about" element={<About/>} />
    </Routes>
    <Footer/>
    </CartProvider>
  </Router>
   </>

  );
}

export default App;
