"use client";
import {
  MulCategorySelectT,
  OnlyCategorySelectT,
} from "@/types/CategorySelectT";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import Select, { SelectOptionActionMeta, components } from "react-select";
const customStyles = {
  //@ts-ignore
  control: (base, state) => ({
    ...base,
    background: state.isFocused ? "white" : "#F5F5F7",
    // borderColor: "#9e9e9e",
    minHeight: 60,
    border: state.isFocused ? "border-blue-primary" : "border-none",
  }),
  //@ts-ignore
  // option: (provided, state) => ({
  //   ...provided,
  //   fontSize: '16px', // adjust the font size as needed
  // }),

  //@ts-ignore
  input: (provided, state) => ({
    ...provided,
    margin: "0px",
    border: "border-none"
  }),
  //@ts-ignore
  // indicatorSeparator: (state) => ({
  //   display: "none",
  // }),
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
  //eslint-disable-next-line react-hooks/rules-of-hooks
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
        defaultValue={{value: "", label: "ASfasf"}}
        className={"hover:bg-gray-5" + twStyles}
        value={selected}
        theme={(theme) => ({
          ...theme,
          borderRadius: 12,
        })}
        styles={customStyles}
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
    componentsData
  } = props;
  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedValue, setSelectedValue] =
    //eslint-disable-next-line react-hooks/rules-of-hooks
    valueMulState || React.useState();
  //todo: work with types
  const handleMulChange = (e: any) => {
    setSelectedValue(e);
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
        // options.filter((obj) => selectedValue.includes(obj.value))
        value={selectedValue}
        options={options ? options : []}
        onChange={handleMulChange}
        isMulti={true}
        defaultValue={options ? options[0] : []}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 12,
        })}
        isClearable
        components={componentsData}
      />
    </div>
  );
};

const OptionLabel = (props: any) => (
  <components.Option {...props} className="flex">
    <span
      className="h-1 w-1"
      style={{ backgroundColor: "#" + props?.data?.data?.color }}
    />
    {props.data?.data?.label}
  </components.Option>
);

export { OnlyCategorySelect, MulCategorySelect };
