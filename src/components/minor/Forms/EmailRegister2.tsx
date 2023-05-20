"use client";

import React, { FormEventHandler, useState } from "react";
import Input from "../Inputs/CustomInput";
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type={"text"}
        label={"email"}
        valueState={[email, setEmail]}
        trimmed={false}
      />
      <Input
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
