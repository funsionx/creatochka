"use client";

import React, { FormEventHandler, useState } from "react";
import CustomInput from "../../minor/CustomInput";
import httpPost from "@/components/api/HttpPost";

type Props = {};

const EmailRegister2 = (props: Props) => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    httpPost("https://rent.creatochka.cooldev.pro/api/renter/registration", {
      fio: fio,
      email: email,
      pass: pass,
      phone: phone,
    });
    // fetch("https://rent.creatochka.cooldev.pro/api/renter/registration")
    console.log(JSON.stringify({ email: email, pass: pass }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        type={"text"}
        label={"Фио"}
        valueState={[fio, setFio]}
        trimmed={false}
        placeholder={"Фио"}
      />
      <CustomInput
        type={"text"}
        label={"Почта"}
        valueState={[email, setEmail]}
        trimmed={true}
        placeholder={"Фио"}
      />
      <CustomInput
        type={"text"}
        label={"Номер телефона"}
        valueState={[phone, setPhone]}
        trimmed={true}
        placeholder={"Фио"}
      />
      <CustomInput
        type={"password"}
        label={"Пароль"}
        valueState={[pass, setPass]}
        trimmed={true}
        placeholder={"Фио"}
      />
      <button type="submit">asdfasd</button>
    </form>
  );
};

export default EmailRegister2;
