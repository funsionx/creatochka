"use client";
import httpPost from "@/components/api/HttpPost";
import CustomInput from "@/components/minor/CustomInput";
import { MediumButton } from "@/components/minor/Buttons";
import React, { FormEventHandler, useState } from "react";
import Link from "next/link";

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
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-lg bg-white p-8 shadow"
      >
        <h2 className="mb-6 text-2xl">Вход</h2>
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
            twStyles="bg-blue-primary min-w-fit text-white mt-3"
          >
            Войти
          </MediumButton>
        </div>

        <div className="my-[16px] h-0  w-full border" />

        <Link href={"/reg"} className="">
          Зарегестрироваться
        </Link>
      </form>
    </div>
  );
};

export default AuthForm;
