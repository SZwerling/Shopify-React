import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
   return (
      <div className="App">
         <Router>
            <p>navigation</p>
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
