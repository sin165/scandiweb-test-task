import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Add from "./pages/Add";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/addproduct" element={<Add />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
