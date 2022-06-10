import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Header from './Components/Header/Header';
import AboutMe from './Components/Navbar/About/AboutMe'
import Blogs from './Components/Navbar/Blogs/Blogs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
