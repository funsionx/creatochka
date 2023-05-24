"use client";
import { MulCategorySelectT, OnlyCategorySelectT } from "@/types/ISelect";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import Select, { SelectOptionActionMeta } from "react-select";

const OnlyCategorySelect: React.FC<OnlyCategorySelectT> = (props) => {
  const { options, twStyles, categoryType, blockStyles, valueState } = props;
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
        classNames={{
          control: (state) =>
            state.isFocused ? "border-blue-primary" : "border-none",
        }}
      />
    </div>
  );
};

const MulCategorySelect: React.FC<MulCategorySelectT> = (props) => {
  const { options, twStyles, categoryType, blockStyles, valueMulState } = props;
  const [selectedValue, setSelectedValue] =
    //eslint-disable-next-line react-hooks/rules-of-hooks
    valueMulState || React.useState<[{ value: string }]>([{ value: "lol" }]);
  //todo: work with types
  const handleMulChange = (e: any) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  return (
    <div className={"flex flex-col " + blockStyles}>
      <p>{categoryType}</p>
      <Select
        className={twStyles}
        placeholder="Select Option"
        //fix !!!!
        //@ts-ignore-next-line
        //todo: work with types
        value={options.filter((obj) => selectedValue.includes(obj.value))}
        options={options}
        onChange={handleMulChange}
        isMulti={true}
        defaultValue={options}
        isClearable
      />
    </div>
  );
};

export { OnlyCategorySelect, MulCategorySelect };
