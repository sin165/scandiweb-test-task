import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateList } from "./utils/updateList";
import Footer from "./components/Footer";
import Add from "./pages/Add";
import List from "./pages/List";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('fetching');
    updateList(setProducts);
  }, [setProducts]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List products={products} />} />
        <Route path="/addproduct" element={<Add />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
