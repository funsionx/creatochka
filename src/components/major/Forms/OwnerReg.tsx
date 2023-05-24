"use client";
import React, { FormEventHandler, useState } from "react";
import httpPost from "@/components/api/HttpPost";
import CustomInput from "@/components/minor/CustomInput";
import { ToastContainer } from "react-toastify";

const OwnerReg: React.FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await httpPost(
      "https://rent.creatochka.cooldev.pro/api/owner/registration",
      data
    );
  };

  const [fio, setFio] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [areaName, setAreaName] = useState("");
  const [legalName, setLegalName] = useState("");
  const [inn, setInn] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [pass, setPass] = useState("");

  const data = {
    fio: fio,
    email: email,
    phone: phone,
    position: position,
    areaName: areaName,
    legalName: legalName,
    inn: inn,
    industry: industry,
    description: description,
    password: pass,
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
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
        label={"Должность"}
        valueState={[position, setPosition]}
        trimmed={true}
        placeholder={"Фио"}
      />
      <CustomInput
        type={"text"}
        label={"Название компании"}
        valueState={[areaName, setAreaName]}
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
        type={"text"}
        label={"Название юридического лица"}
        valueState={[legalName, setLegalName]}
        trimmed={true}
        placeholder={"Фио"}
      />
      <CustomInput
        type={"text"}
        label={"ИНН"}
        valueState={[inn, setInn]}
        trimmed={true}
        placeholder={"Фио"}
      />
      <CustomInput
        type={"text"}
        label={"Отрасль"}
        valueState={[industry, setIndustry]}
        trimmed={true}
        placeholder={"Фио"}
      />
      <CustomInput
        type={"text"}
        label={"Описание"}
        valueState={[description, setDescription]}
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

export default OwnerReg;
