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
  const { options, twStyles, categoryType, isMulti, blockStyles } = props;
  return (
    <div className={"flex flex-col " + blockStyles}>
      <p>{categoryType}</p>
      <Select
        options={options}
        isClearable={true}
        isSearchable={true}
        defaultValue={options[0]}
        className={"hover:bg-gray-5" + twStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 12,
        })}
        classNames={{
          control: (state) =>
            state.isFocused ? "border-blue-primary" : "border-none",
        }}
        isMulti={isMulti}
      />
    </div>
  );
};

export default CategorySelect;
