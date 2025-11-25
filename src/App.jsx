import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./detailpage/Home";
import Products from "./detailpage/Products";
import Blog from "./detailpage/Blog";
import Faq from "./detailpage/Faq";
import Contact from "./detailpage/Contact";
import MainLayoutCard from "./pages/cards1/layout/MainLayoutCard";
import Watch from "./pages/cards1/watch/Watch";
import DetailWatch from "./pages/cards1/watch/DetailWatch";
import Gaming from "./pages/cards1/gaming/Gaming";
import DetailGaming from "./pages/cards1/gaming/DetailGaming";
import Phone from "./pages/cards1/phone/Phone";
import PhoneDetail from "./pages/cards1/phone/PhoneDetail";
import Laptop from "./pages/cards1/laptop/Laptop";
import LaptopDetail from "./pages/cards1/laptop/LaptopDetail";
import Camera from "./pages/cards1/camera/Camera";
import CameraDetail from "./pages/cards1/camera/LaptopDetail";
import Accessories from "./pages/cards1/Accessories/Accessories";
import AccessoriesDetail from "./pages/cards1/Accessories/AccessoriesDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/watch" element={<MainLayoutCard />}>
          <Route index element={<Watch />} />
          <Route path=":id" element={<DetailWatch />} />
        </Route>
        <Route path="/gaming" element={<MainLayoutCard />}>
          <Route index element={<Gaming />} />
          <Route path=":id" element={<DetailGaming />} />
        </Route>
        <Route path="/phone" element={<MainLayoutCard />}>
          <Route index element={<Phone/>} />
          <Route path=":id" element={<PhoneDetail />} />
        </Route>
        <Route path="/laptop" element={<MainLayoutCard />}>
          <Route index element={<Laptop/>} />
          <Route path=":id" element={<LaptopDetail />} />
        </Route>
        <Route path="/camera" element={<MainLayoutCard />}>
          <Route index element={<Camera/>} />
          <Route path=":id" element={<CameraDetail />} />
        </Route>
         <Route path="/accessories" element={<MainLayoutCard />}>
          <Route index element={<Accessories/>} />
          <Route path=":id" element={<AccessoriesDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
