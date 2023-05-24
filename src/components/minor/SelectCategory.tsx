// import { ICategorySelect, ISelectCategory } from "@/types/ISelect";
// import React, { FC } from "react";

// type Props = {};

// const SelectCategory: FC<ISelectCategory> = ({
//   label,
//   options,
//   valueState,
//   twStyles,
//   multiple,
// }) => {
//   //eslint-disable-next-line react-hooks/rules-of-hooks
//   const [value, handleValueChange] = valueState || React.useState("");

//   const handleChange = (event: any) => {
//     handleValueChange(event.target.value);
//     console.log(value);
//   };

//   const handleMulChange = (e: any) => {
//     // [...e.target.options]
//     // .filter(({ selected }) => selected)
//     // .map(({ value }) => value);
//     // console.log(value);
//     const options = e.target.options;
//     const value = [];
//     for (let i = 0, l = options.length; i < l; i++) {
//       if (options[i].selected) {
//         value.push(options[i].value);
//       }
//     }
//   };

//   return !multiple ? (
//     <label>
//       {label}
//       <select
//         value={value}
//         onChange={handleChange}
//         className={twStyles}
//         multiple={multiple}
//       >
//         {options.map((option) => (
//           <option value={option.value}>{option.label}</option>
//         ))}
//       </select>
//     </label>
//   ) : (
//     <label>
//       {label}
//       <select
//         value={value}
//         onChange={handleMulChange}
//         className={twStyles}
//         multiple={multiple}
//       >
//         {options.map((option) => (
//           <option value={option.value}>{option.label}</option>
//         ))}
//       </select>
//     </label>
//   );
// };

// export default SelectCategory;
