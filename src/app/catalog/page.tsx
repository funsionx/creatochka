import CatalogSearch from "@/components/major/Forms/CatalogSearch";
import { NextPage } from "next";
import React from "react";

type Props = {};

const Catalog: NextPage = (props: Props) => {
  return (
    <>
      <CatalogSearch />
    </>
  );
};

export default Catalog;
