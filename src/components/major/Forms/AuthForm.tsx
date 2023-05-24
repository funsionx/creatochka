"use client"
import httpPost from "@/components/api/HttpPost";
import CustomInput from "@/components/minor/CustomInput";
import React, { FormEventHandler, useState } from "react";

const AuthForm: React.FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await httpPost("https://rent.creatochka.cooldev.pro/api/auth", {
      email: email,
      password: password,
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        type={"text"}
        label={"Почта"}
        valueState={[email, setEmail]}
        trimmed={true}
        placeholder={"Фио"}
      />
      <CustomInput
        type={"text"}
        label={"Фио"}
        valueState={[password, setPassword]}
        trimmed={false}
        placeholder={"Фио"}
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default AuthForm;
