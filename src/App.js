import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Ecommerce, Customers } from "./pages";
import style from "./App.module.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className={style.parent}>
          <Sidebar />
          <div className={style.navbar}>
            <Navbar />

            <div>
              <Routes>
                <Route path="/AdminDashBoard" element={<Ecommerce />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
