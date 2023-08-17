import React, { useState } from "react";
import Produit from "./Produit";
import "./../App.css";

function Liste_Produits() {
  const [produits, setProduits] = useState([
    {
      id: 1,
      name: "pikapika",
      prix: "10",
      description: "Description for pikapika"
    },
    { id: 2, name: "marble", prix: "1", description: "Description for marble" },
    {
      id: 3,
      name: "cushion",
      prix: "15",
      description: "Description for cushion"
    }
  ]);

  return (
    <div>
      <h1>My E-commerce page</h1>
      <div className="product-list">
        {produits.map((produit) => (
          <div key={produit.id} className="product">
            <Produit produitInfo={produit} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Liste_Produits;
