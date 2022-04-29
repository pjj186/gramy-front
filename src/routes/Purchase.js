import React from "react";
import Helmet from "react-helmet";

const Purchase = () => {
  return (
    <>
      <Helmet>
        <title>GRAMy | 구매 문의</title>
      </Helmet>
      <div className="w-full h-full ">
        <div className="bg-orange-300 py-10 flex w-full h-full items-center justify-center text-3xl font-semibold">
          구매 문의 게시판
        </div>
        <div className="w-full h-full">
          <div>
            {/* 게시글 리스트 */}
            <table>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>조회</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>{/* 글 작성 버튼 박스 */}</div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
