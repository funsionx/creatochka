import { IIconButton } from "@/types/IIconButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IconButton: React.FC<IIconButton> = ({href, img, width, height }) => {
  return (
    <Link href={href}>
      <Image src={img} alt={"pic"} width={width} height={height} />
    </Link>
  );
};

export default IconButton;
