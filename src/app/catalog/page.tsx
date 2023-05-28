import React from "react";
import { NextPage } from "next";
import CatalogSearch from "@/components/major/СatalogSearch";
import CardsCatalog from "@/components/major/CardsCatalog";

const Catalog: NextPage = () => {
  return (
    <>
      <h1>Аренда помещений в Москве</h1>
      <main className="flex">
        <CatalogSearch />
        <CardsCatalog />
      </main>
    </>
  );
};

export default Catalog;
