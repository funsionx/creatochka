import { FC, useState } from "react";
import { components } from "react-select";

const ColorCircleOption: FC = (props: any) => {
  const [isZhd, setIsZhd] = useState(false);
  return (
    <components.Option {...props}>
      <div className="flex items-center">
        <span
          className="mr-2 h-2 w-2 rounded-full"
          style={{ backgroundColor: "#" + props.data.color }}
        />
        <div className="station-name">{props.data.label}</div>
        {/* <div className="line-name">{props.data.lineValue}</div> */}
      </div>
    </components.Option>
  );
};

export default ColorCircleOption