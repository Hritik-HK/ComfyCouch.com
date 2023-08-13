import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import About from '../components/pages/About';
import {Routes, Route} from "react-router-dom";

export default function AllRoutes() {
  return (<div>
       <Routes>
      <Route exact path="/ComfyCouch.com" element={<Home/>} />
      <Route exact path="/ComfyCouch.com/products" element={<Products/>} />
      <Route exact path="/ComfyCouch.com/aboutUs" element={<About/>} />
    </Routes>
</div>);
}
