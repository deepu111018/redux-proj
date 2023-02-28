import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container maxwidth="lg" style={{ backgroundColor: '#cfe8fc' }}>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route>404 not found</Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
