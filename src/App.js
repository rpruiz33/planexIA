import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import ServiceList from './components/ServiceList';
import ContactForm from './components/ContactForm';
import ServiceDetail from './components/ServiceDetail';
import Product from './components/Product';
import ServiceContainer from './components/ServiceContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function NotFound() {
  return (
    <div>
      <h2>Página no encontrada</h2>
      <p>La página que estás buscando no existe.</p>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<ServiceContainer />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/service/:id/*" element={<ServiceDetail />} />
          <Route path="/product/:id" element={<Product productId="123" productName="Producto" />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Home"  element={<Home />} />
          </Routes>
  
   
       
        <Footer />
      </div>
    </Router>
  );
};

export default App;
