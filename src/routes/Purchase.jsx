import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import PurchaseTableBody from "../components/PurchaseTableBody";

const Purchase = () => {
  return (
    <>
      <Helmet>
        <title>GRAMy | 구매 문의</title>
      </Helmet>
      <div className="w-full h-full ">
        <div className="py-10 flex w-full h-full items-center justify-center text-3xl font-semibold">
          구매 문의 게시판
        </div>
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-full flex justify-center items-center">
            {/* 게시글 리스트 */}
            <table className=" w-3/4 border border-slate-500 mb-4">
              <thead>
                <tr className="border border-slate-500">
                  <th className="py-3">번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>조회</th>
                </tr>
              </thead>
              <PurchaseTableBody />
            </table>
          </div>
          <div className=" w-[87%] flex justify-end mb-4">
            {/* 글 작성 버튼 박스 */}
            <Link to="write">
              <button className="h-9 bg-[#90C8B4] rounded-md text-white font-bold w-28">
                글 쓰기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
