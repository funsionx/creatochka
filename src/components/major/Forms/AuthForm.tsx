"use client"
import httpPost from "@/components/api/HttpPost";
import CustomInput from "@/components/minor/CustomInput";
import { MediumButton } from "@/components/minor/Buttons";
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
    <div className="flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow flex flex-col">
        <h2 className="text-2xl mb-6">Вход</h2>
        <CustomInput
          type="text"
          label="Email"
          valueState={[email, setEmail]}
          trimmed={true}
          placeholder="Email"
        />
        <CustomInput
          type="password"
          label="Пароль"
          valueState={[password, setPassword]}
          trimmed={false}
          placeholder="Пароль"
        />
        <div className="mt-auto">
          <MediumButton
            type="submit"
            twStyles="bg-blue-primary max-w-fit text-white mt-3"
          >
            Войти
          </MediumButton>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
