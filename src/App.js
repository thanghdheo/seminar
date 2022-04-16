import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <div className="h-full bg-gray-100">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/create" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
