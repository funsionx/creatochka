"use client";
import HttpRequest from "@/components/api/HttpGets";
import httpPost from "@/components/api/HttpPost";
import axios from "axios";
import React from "react";

import { useForm } from "react-hook-form";

type Props = {};

const EmailRegister = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) =>
          httpPost(
            "https://rent.creatochka.cooldev.pro/api/renter/registration",
            data
          )
        )}
      >
        <input {...(register("ФИО"), { required: true })} />
        <input {...register("lastName", { required: true })} />
        <input {...register("Email")} />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default EmailRegister;
