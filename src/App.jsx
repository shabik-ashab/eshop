import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Success from "./pages/Success";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category"  element={<ProductList />} />
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
