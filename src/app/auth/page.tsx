import EmailRegister from "@/components/minor/Forms/EmailRegister";
import EmailRegister2 from "@/components/minor/Forms/EmailRegister2";
import Input from "@/components/minor/Inputs/CustomInput";
import { NextPage } from "next";
import React from "react";

type Props = {};

const Auth: NextPage = (props: Props) => {
  return (
    <div>
      <EmailRegister />
      <EmailRegister2 />
    </div>
  );
};

export default Auth;
