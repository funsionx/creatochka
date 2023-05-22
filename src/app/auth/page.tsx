import EmailRegister from "@/components/major/Forms/EmailRegister";
import RenterReg from "@/components/major/Forms/RenterReg";
import Input from "@/components/minor/CustomInput";
import { NextPage } from "next";
import React from "react";

type Props = {};

const Auth: NextPage = (props: Props) => {
  return (
    <div>
      <RenterReg />
    </div>
  );
};

export default Auth;
