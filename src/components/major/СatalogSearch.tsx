import React from "react";
import CatalogSearchForm from "./Forms/CatalogSearchForm";

type Props = {};

const СatalogSearch: React.FC = (props: Props) => {
  return (
    <aside className="h-fit max-w-[370px] rounded-[18px] bg-white px-[20px] py-[30px]">
      <CatalogSearchForm />
    </aside>
  );
};

export default СatalogSearch;
