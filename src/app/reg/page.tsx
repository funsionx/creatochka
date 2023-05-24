import React from "react";
import { NextPage } from "next";
import OwnerReg from "@/components/major/Forms/OwnerReg";
import RenterReg from "@/components/major/Forms/RenterReg";

const Register: NextPage = () => {
  return (
    <main>
      <OwnerReg />
      <RenterReg />
    </main>
  );
};

export default Register;
