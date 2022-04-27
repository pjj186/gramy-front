import React, { useContext, useState } from "react";
import { AppContext } from "../App";

const Join = () => {
  const ModalContext = useContext(AppContext);

  const [input, setinput] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
    gender: "",
    address: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setinput({
      ...input,
      [name]: value,
    });
  };

  const phoneAuth = (e) => {
    e.preventDefault();
  };

  const findAddress = (e) => {
    e.preventDefault();
  };

  const showTerms = (e) => {
    const { id } = e.target;
    ModalContext.setTerms({
      ...ModalContext.terms,
      [id]: true,
    });
  };

  return (
    <>
      <div className="w-full h-full my-14 flex justify-center items-center">
        <div className=" bg-white w-[600px] h-[800px] shadow-lg">
          <div className=" px-10">
            <div className="font-semibold text-2xl w-full flex justify-center items-center mt-10 mb-5">
              회원가입
            </div>
            <form className="flex flex-col">
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="email"
                placeholder="이메일 주소 (필수)"
                required
                value={input.id}
                name="email"
                onChange={onChangeInput}
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="password"
                placeholder="비밀번호 (필수)"
                required
                value={input.pw}
                name="password"
                onChange={onChangeInput}
              />
              <input
                className=" border-b-slate-700 border-b-[1px] h-10 mb-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                type="text"
                placeholder="이름 (필수)"
                required
                value={input.username}
                name="username"
                onChange={onChangeInput}
              />
              <div>
                <input
                  className=" border-b-slate-700 border-b-[1px] w-1/2 h-10 mb-4 mr-4 pl-2 focus:outline-none focus:border-slate-500 focus:ring-[3px] focus:ring-slate-500 transition-all duration-200"
                  type="number"
                  placeholder="전화번호 (-없이 입력) (필수)"
                  required
                  value={input.phone}
                  name="phone"
                  onChange={onChangeInput}
                />
                <button
                  className="h-10 bg-[#90C8B4] rounded-md text-white font-bold w-28"
                  onClick={phoneAuth}
                >
                  인증 하기
                </button>
              </div>
              {/* 성별 */}
              <div className="flex w-80 justify-around mb-6">
                <span className=" text-[#6A7280]">성별 (선택)</span>
                <div className="flex items-center mr-1">
                  <span className="mr-2">남성</span>
                  <input
                    className="focus:ring-2 focus:ring-sky-400 text-sky-400"
                    type="radio"
                    name="gender"
                    value="man"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="flex items-center mr-1">
                  <span className="mr-2">여성</span>
                  <input
                    className="focus:ring-2 focus:ring-red-300 text-red-300"
                    type="radio"
                    name="gender"
                    value="women"
                    onChange={onChangeInput}
                  />
                </div>
                <div className="flex items-center mr-1">
                  <span className="mr-2">상관없음</span>
                  <input
                    className="focus:ring-2 focus:ring-gray-500 text-gray-500"
                    type="radio"
                    name="gender"
                    value="nothing"
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              {/* 주소 */}
              <div className="flex px-2">
                <div className="text-[#6A7280] mr-4">주소</div>
                <div>
                  <div className="flex items-center mb-4">
                    {/* 우편번호 */}
                    <input
                      className="h-6 w-32 mr-4 py-4 bg-slate-100"
                      type="text"
                      placeholder="우편번호"
                      disabled
                    />
                    <button
                      className="h-8 bg-white border border-black text-black font-normal w-24"
                      onClick={findAddress}
                    >
                      주소검색
                    </button>
                  </div>
                  <div className="flex items-center mb-4">
                    {/* 주소 */}
                    <input
                      className="h-6 w-96 py-4 bg-slate-100"
                      type="text"
                      placeholder="주소"
                      disabled
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    {/* 상세 정보 */}
                    <input
                      className="h-6 w-80 py-4"
                      type="text"
                      placeholder="상세 주소"
                    />
                  </div>
                </div>
              </div>
              {/* 이용 약관 */}
              <div className="mb-4">
                <div className="font-semibold text-xl">이용 약관 동의</div>
                <div className="flex flex-col justify-around h-44 font-thin">
                  <div className="flex items-center">
                    <input
                      className="mr-2 focus:ring-0 text-green-500"
                      type="checkbox"
                    />
                    <span>전체 약관 동의합니다.</span>
                  </div>
                  <div className="flex items-center relative">
                    <input
                      className="mr-2 focus:ring-0 text-green-500"
                      type="checkbox"
                      required
                    />
                    <span>GRAMy 이용 약관 동의</span>
                    <div className="absolute right-0 font-semibold pr-5">
                      <span
                        className="cursor-pointer"
                        onClick={showTerms}
                        id="modal1"
                      >
                        약관보기 {">"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center relative">
                    <input
                      className="mr-2 focus:ring-0 text-green-500"
                      type="checkbox"
                      required
                    />
                    <span>개인정보 취급 방침 동의 (필수)</span>
                    <div className="absolute right-0 font-semibold pr-5">
                      <span
                        className="cursor-pointer"
                        onClick={showTerms}
                        id="modal2"
                      >
                        약관보기 {">"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center relative">
                    <input
                      className="mr-2 focus:ring-0 text-green-500"
                      type="checkbox"
                    />
                    <span>개인정보 취급 방침 동의 (선택)</span>
                    <div className="absolute right-0 font-semibold pr-5">
                      <span
                        className="cursor-pointer"
                        onClick={showTerms}
                        id="modal3"
                      >
                        약관보기 {">"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="mr-2 focus:ring-0 text-green-500"
                      type="checkbox"
                    />
                    <span>할인/혜택/마케팅/광고 등 정보 수신 (선택)</span>
                  </div>
                </div>
              </div>
              <input
                className=" bg-[#90C8B4] rounded-md text-white h-10 font-bold cursor-pointer"
                type="submit"
                value="회원가입"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
