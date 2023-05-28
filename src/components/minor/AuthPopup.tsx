import React, { FC, ReactNode } from "react";
import Popup from "reactjs-popup";
import AuthForm from "../major/Forms/AuthForm";

export interface AuthPopup {
  button: any;
}


const AuthPopup: FC<AuthPopup> = ({ button }) => {
  return (
    <>
      <div id="overlay"></div>
      <Popup trigger={button} modal nested>
        {/* @ts-ignore */}
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <AuthForm />
          </div>
        )}
      </Popup>
    </>
  );
};

export default AuthPopup;
