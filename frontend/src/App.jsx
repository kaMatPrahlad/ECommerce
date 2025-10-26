import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="womens" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
