import React from "react";
import { Link } from "react-router-dom";
import NomProduit from "./NomProduit"; // Make sure to import the NomProduit component

export default function Produit({ produitInfo }) {
  return (
    <Link to={`/produit/${produitInfo.name}`} component={NomProduit}>
      <img
        src="https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-04/pon.jpg"
        alt={produitInfo.name}
      />
      <span className="product-name">{produitInfo.name}</span>
      <span className="product-price">${produitInfo.prix}</span>
    </Link>
  );
}
