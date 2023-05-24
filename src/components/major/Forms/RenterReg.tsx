"use client";

import React, { FormEventHandler, useState } from "react";
import CustomInput from "../../minor/CustomInput";
import httpPost from "@/components/api/HttpPost";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const EmailRegister2: React.FC = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    //eslint-disable-next-line react-hooks/rules-of-hooks
    await httpPost(
      "https://rent.creatochka.cooldev.pro/api/renter/registration",
      {
        fio: fio,
        email: email,
        password: pass,
        phone: phone,
      }
    );
  };

  return (
    <>
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default EmailRegister2;
