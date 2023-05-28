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
    <div className="flex justify-center items-center">
      <div className="md:flex md:items-center md:w-full lg:w-2/3 md:mr-20 h-screen">
        <div className="hidden md:block md:w-1/2 lg:w-2/3 m-4">
          <Image src={pic} alt={"reg image"} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/3">
        <form onSubmit={handleSubmit} className=" p-5 rounded-lg ">
          <h2 className="text-2xl mb-6">Регистрация</h2>
          <CustomInput
            type="text"
            label="Фамилия"
            valueState={[fio, setFio]}
            trimmed={false}
            placeholder="Фамилия"
          />
          <CustomInput
            type="text"
            label="Email"
            valueState={[email, setEmail]}
            trimmed={true}
            placeholder="Email"
          />
          <CustomInput
            type="text"
            label="Телефон"
            valueState={[phone, setPhone]}
            trimmed={true}
            placeholder="Телефон"
          />
          <CustomInput
            type="password"
            label="Пароль"
            valueState={[pass, setPass]}
            trimmed={true}
            placeholder="Введите пароль"
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
