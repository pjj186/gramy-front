import React from "react";

const PurchaseTableBody = ({ articleInfo }) => {
  articleInfo
    ? articleInfo.map((info) => console.log(info))
    : console.log("no data");
  return (
    <>
      {articleInfo
        ? articleInfo.map((info, key) => {
            return (
              <tr className="border border-slate-500">
                <td className="py-3 ">{info.id}</td>
                <td>{info.name}</td>
                <td>{info.username}</td>
                <td>2022-04-29</td>
                <td>0</td>
              </tr>
            );
          })
        : null}
    </>
  );
};

export default PurchaseTableBody;
