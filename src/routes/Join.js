import React, { useState } from "react";

const Join = () => {
  const [input, setinput] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setinput({
      ...input,
      [name]: value,
    });
  };
  return (
    <div className="w-full h-full my-14 flex justify-center items-center">
      <div className=" bg-white w-[600px] h-[800px] shadow-lg">
        <div className=" px-10">
          <div className="font-semibold text-2xl w-full flex justify-center items-center mt-10 mb-5">
            회원가입
          </div>
          <form className="flex flex-col">
            <input
              className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-b-0 focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
              type="email"
              placeholder="이메일 주소 (필수)"
              required
              value={input.id}
              name="email"
              onChange={onChangeInput}
            />
            <input
              className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-b-0 focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
              type="password"
              placeholder="비밀번호 (필수)"
              required
              value={input.pw}
              name="password"
              onChange={onChangeInput}
            />
            <input
              className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-b-0 focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
              type="text"
              placeholder="이름 (필수)"
              required
              value={input.username}
              name="username"
              onChange={onChangeInput}
            />
            <input
              className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-b-0 focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
              type="number"
              placeholder="전화번호 (-없이 입력) (필수)"
              required
              value={input.phone}
              name="phone"
              onChange={onChangeInput}
            />
            <button className=" bg-[#90C8B4] rounded-md text-white h-10 font-bold">
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
