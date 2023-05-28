"use client";

import React, { FormEventHandler, useState } from "react";
import Image from "next/image";
import pic from "../../../../public/imgs/3185942 1.png";
import CustomInput from "../../minor/CustomInput";
import httpPost from "@/components/api/HttpPost";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { MediumButton } from "@/components/minor/Buttons";

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
    <div className="flex items-center justify-center">
      <div className="h-screen md:mr-20 md:flex md:w-full md:items-center lg:w-2/3">
        <div className="m-4 hidden md:block md:w-1/2 lg:w-2/3">
          <Image
            src={pic}
            alt={"reg image"}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/3">
        <form onSubmit={handleSubmit} className=" rounded-lg p-5 ">
          <h2 className="mb-6 text-2xl">Регистрация</h2>
          <CustomInput
            type="text"
            label="Введите ФИО"
            valueState={[fio, setFio]}
            trimmed={false}
            placeholder="ФИО"
          />
          <CustomInput
            type="text"
            label="Введите почту"
            valueState={[email, setEmail]}
            trimmed={true}
            placeholder="Email"
          />
          <CustomInput
            type="text"
            label="Введите телефон"
            valueState={[phone, setPhone]}
            trimmed={true}
            placeholder="Телефон"
          />
          <CustomInput
            type="password"
            label="Введите пароль"
            valueState={[pass, setPass]}
            trimmed={true}
            placeholder="Пароль"
          />
          <MediumButton
            type="submit"
            twStyles="bg-blue-primary max-w-fit text-white mt-3 mb-3"
          >
            Зарегистрировать
          </MediumButton>
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
      </div>
    </div>
  );
};

export default EmailRegister2;
