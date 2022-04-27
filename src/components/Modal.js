import React, { useContext, useState } from "react";
import { AppContext } from "../App";

const Modal = () => {
  const ModalContext = useContext(AppContext);
  const [isMouseLeave, setIsMouseLeave] = useState(false);

  const closeModal = () => {
    if (isMouseLeave === true) {
      ModalContext.setTerms({
        ...ModalContext.terms,
        modal1: false,
      });
    }
  };
  return (
    <>
      <div
        className="fixed top-0 w-screen h-screen bg-slate-500/50 z-10 flex justify-center items-center"
        onClick={closeModal}
      >
        <div
          onMouseOver={(e) => {
            setIsMouseLeave(false);
          }}
          onMouseLeave={(e) => {
            setIsMouseLeave(true);
          }}
          className="z-20 w-[700px] h-[800px] opacity-100 bg-white"
        >
          내가만만해
        </div>
      </div>
    </>
  );
};

export default Modal;
