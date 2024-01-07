import React from "react";

function TableValues(props) {
  const { InvoiceID, Date, Customer, PayableAmount, PaidAmount, Due } =
    props.data;
  return (
    <>
      <tr>
        <input type="checkbox" />
        <td className="px-10 text-blue-500">{InvoiceID}</td>
        <td className="px-10 py-3 font-medium text-gray-900  dark:text-white">
          {Date}
        </td>
        <td className=" px-10 py-3 font-medium text-gray-900  dark:text-white">
          {Customer}
        </td>
        <td className="px-10 py-3 font-medium text-gray-900  dark:text-white">
          ${PayableAmount}
        </td>
        <td className=" px-10 py-3 font-medium text-gray-900  dark:text-white">
          ${PaidAmount}
        </td>
        <td className=" px-10 py-3 font-medium text-gray-900  dark:text-white">
          ${PayableAmount - PaidAmount}
        </td>
      </tr>
    </>
  );
}

export default TableValues;
