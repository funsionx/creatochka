"use client";

import React, { FormEventHandler, useState } from "react";
import CustomInput from "../Inputs/CustomInput";
import httpPost from "@/components/api/HttpPost";

type Props = {};

const EmailRegister2 = (props: Props) => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    httpPost("https://rent.creatochka.cooldev.pro/api/renter/registration", {
      email: email,
      pass: pass,
    });
    console.log(JSON.stringify({ email: email, pass: pass }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        type={"text"}
        label={"email"}
        valueState={[email, setEmail]}
        trimmed={false}
      />
      <CustomInput
        type={"password"}
        label={"pass"}
        valueState={[pass, setPass]}
        trimmed={false}
      />
      <button type="submit">asdfasd</button>
    </form>
  );
};

export default EmailRegister2;
