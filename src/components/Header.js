import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full h-[80px] bg-white flex">
      <img src="img/logo.png" alt="로고" className=" w-[80px] h-[80px]" />
      <div className=" flex justify-between h-[80px] w-full">
        <div className=" flex items-center justify-around w-[450px] h-[80px]">
          <Link to="/" className=" font-bold">
            GRAMy
          </Link>
          <Link to="/">제품 소개</Link>
          <Link to="/">구매 문의</Link>
          <Link to="/">고장 문의</Link>
        </div>
        <div className=" flex items-center justify-around w-[310px]">
          <Link to="/">
            <button className="bg-[#2F74F1] text-white w-[100px] h-[35px] rounded-md">
              로그인
            </button>
          </Link>
          <Link to="/">
            <button className="bg-[#2F74F1] text-white w-[100px] h-[35px] rounded-md">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
