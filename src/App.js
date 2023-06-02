import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Ecommerce, Customers } from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#f5f5f5",
            }}
          >
            <Navbar />

            <div>
              <Routes>
                <Route path="/" element={<Ecommerce />} />
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
