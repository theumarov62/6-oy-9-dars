import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Barcha ma'lumot yo'li */}
        <Route path="/" element={<Home />} />

        {/* Foydalanuvchi tanlagan card bo'yicha to'liq malumot yo'li */}
        <Route path="/country/:name" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
