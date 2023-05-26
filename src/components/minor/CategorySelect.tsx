"use client";
import { MulCategorySelectT, OnlyCategorySelectT } from "@/types/CategorySelectT";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import Select, { SelectOptionActionMeta } from "react-select";
const customStyles = {
  //@ts-ignore
  control: (base, state) => ({
    ...base,
    background: state.isFocused ? "white" : "#F5F5F7",
    borderColor: "#9e9e9e",
    minHeight: 60,
    border: state.isFocused ? "border-blue-primary" : "border-none",
  }),

  //@ts-ignore
  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  //@ts-ignore
  indicatorSeparator: (state) => ({
    display: "none",
  }),
};

const OnlyCategorySelect: React.FC<OnlyCategorySelectT> = (props) => {
  const {
    options,
    twStyles,
    categoryType,
    blockStyles,
    valueState,
    placeholder,
  } = props;
  const [selected, setSelected] =
    //eslint-disable-next-line react-hooks/rules-of-hooks
    valueState || React.useState();
  //todo: work with types
  const handleChange = (e: any) => {
    // console.log(e)
    setSelected(e);
  };

  return (
    <div className={"flex flex-col " + blockStyles}>
      <p>{categoryType}</p>
      <Select
        //@ts-ignore-next-line
        options={options}
        isClearable={true}
        isSearchable={true}
        defaultValue={options[0]}
        className={"hover:bg-gray-5" + twStyles}
        value={selected}
        theme={(theme) => ({
          ...theme,
          borderRadius: 12,
        })}
        onChange={handleChange}
        placeholder={placeholder}
        classNames={{
          control: (state) =>
            state.isFocused ? "border-blue-primary" : "border-none",
        }}
      />
    </div>
  );
};

const MulCategorySelect: React.FC<MulCategorySelectT> = (props) => {
  const {
    options,
    twStyles,
    categoryType,
    blockStyles,
    valueMulState,
    isBoldCategory,
    placeholder,
  } = props;
  const [selectedValue, setSelectedValue] =
    //eslint-disable-next-line react-hooks/rules-of-hooks
    valueMulState || React.useState<[{ value: string }]>();
  //todo: work with types
  const handleMulChange = (e: any) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  return (
    <div className={"flex flex-col " + blockStyles}>
      {!isBoldCategory ? <p>{categoryType}</p> : <h5>{categoryType}</h5>}
      <Select
        className={twStyles}
        placeholder={placeholder}
        //fix !!!!
        //@ts-ignore-next-line
        //todo: work with types
        value={options.filter((obj) => selectedValue.includes(obj.value))}
        options={options}
        onChange={handleMulChange}
        isMulti={true}
        defaultValue={options}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 12,
        })}
        isClearable
      />
    </div>
  );
};

export { OnlyCategorySelect, MulCategorySelect };
