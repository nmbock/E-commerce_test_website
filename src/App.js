import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Liste_Produits from "./components/Liste_Produits";
import Test from "./components/Test";
import NomProduit from "./components/NomProduit"; // Make sure to import the NomProduit component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pika />} />
        <Route path="/produit" element={<Liste_Produits />} />
        <Route path="/test" element={<Test />} />
        <Route path="/produit/:nom" element={<NomProduit />} />{" "}
        {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
function Pika() {
  return <Link to="/produit">Pika</Link>;
}
