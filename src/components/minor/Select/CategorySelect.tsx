"use client";
import { ICategorySelect } from "@/types/ISelect";
import React from "react";
import Select from "react-select";

// const someData = [
//   { value: "any", label: "Любое" },
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

const CategorySelect: React.FC<ICategorySelect> = (props) => {
  const { options, twStyle, categoryType } = props;
  return (
    <div className="flex flex-col">
      <p>{categoryType}</p>
      <Select
        options={options}
        isClearable={true}
        isSearchable={true}
        defaultValue={options[0]}
        className={`${twStyle}`}
      />
    </div>
  );
};

export default CategorySelect;
