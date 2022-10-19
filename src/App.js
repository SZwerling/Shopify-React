import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NavBar } from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import  Cart  from "./components/Cart"
import NavMenu from "./components/NavMenu";

function App() {
   return (
      <div className="App">
         <Router>
            <NavBar />
            <Cart />
            <NavMenu />
            <Routes>
               <Route path="/products/:handle" element={<ProductPage />} />
               <Route path="/" element={<Home />} />
            </Routes>
            <p>footer</p>
         </Router>
      </div>
   );
}

export default App;
