import React from "react";
import { useParams } from "react-router-dom";

function NomProduit() {
  const { nom } = useParams();

  return <h1>Nom du produit: {nom}</h1>;
}

export default NomProduit;
