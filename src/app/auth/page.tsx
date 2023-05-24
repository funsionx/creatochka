import React from "react";
import { NextPage } from "next";
import OwnerReg from "@/components/major/Forms/OwnerReg";
import RenterReg from "@/components/major/Forms/RenterReg";
import AuthForm from "@/components/major/Forms/AuthForm";
import Link from "next/link";

type Props = {};

const Auth: NextPage = (props: Props) => {
  return (
    <main>
      <AuthForm />
      <Link href={"/reg"}>
        <h5>Зарегестрироватся</h5>
      </Link>
    </main>
  );
};

export default Auth;
