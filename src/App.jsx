import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CountryDetail from "./components/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
