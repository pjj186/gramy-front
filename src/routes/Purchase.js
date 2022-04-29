import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

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
              <tbody className="text-center">
                <tr className="border border-slate-500">
                  <td className="py-3 ">10</td>
                  <td>타이틀</td>
                  <td>휴먼</td>
                  <td>2022-04-29</td>
                  <td>0</td>
                </tr>
                <tr className="border border-slate-500">
                  <td className="py-3">9</td>
                  <td>타이틀</td>
                  <td>휴먼</td>
                  <td>2022-04-29</td>
                  <td>0</td>
                </tr>
                <tr className="border border-slate-500">
                  <td className="py-3">8</td>
                  <td>타이틀</td>
                  <td>휴먼</td>
                  <td>2022-04-29</td>
                  <td>0</td>
                </tr>
                <tr className="border border-slate-500">
                  <td className="py-3">7</td>
                  <td>타이틀</td>
                  <td>휴먼</td>
                  <td>2022-04-29</td>
                  <td>0</td>
                </tr>
                <tr className="border border-slate-500">
                  <td className="py-3">6</td>
                  <td>타이틀</td>
                  <td>휴먼</td>
                  <td>2022-04-29</td>
                  <td>0</td>
                </tr>
                <tr className="border border-slate-500">
                  <td className="py-3">5</td>
                  <td>타이틀</td>
                  <td>휴먼</td>
                  <td>2022-04-29</td>
                  <td>0</td>
                </tr>
                <tr className="border border-slate-500">
                  <td className="py-3">4</td>
                  <td>타이틀</td>
                  <td>휴먼</td>
                  <td>2022-04-29</td>
                  <td>0</td>
                </tr>
                <tr className="border border-slate-500">
                  <td className="py-3">3</td>
                  <td>타이틀</td>
                  <td>휴먼</td>
                  <td>2022-04-29</td>
                  <td>0</td>
                </tr>
                <tr className="border border-slate-500">
                  <td className="py-3">2</td>
                  <td>타이틀</td>
                  <td>휴먼</td>
                  <td>2022-04-29</td>
                  <td>0</td>
                </tr>
                <tr className="border border-slate-500">
                  <td className="py-3">1</td>
                  <td>타이틀</td>
                  <td>휴먼</td>
                  <td>2022-04-29</td>
                  <td>0</td>
                </tr>
              </tbody>
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
