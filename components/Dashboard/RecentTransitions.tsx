import React from "react";
import { FiArrowRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";

function RecentTransitions() {
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiDollarSign /> Recent Transitions
        </h3>
        <button className="text-sm text-violet-500 hover:underline">
          See all
        </button>
      </div>
      <table className="w-full table-auto">
        <TableHead />
        <tbody>
          <TabelRow
            cusId="#4814"
            sku="Pro 1 Month"
            date="Aug 2nd"
            price="$9.75"
            order={1}
          />
          <TabelRow
            cusId="#1942s"
            sku="Pro 3 Month"
            date="Aug 2nd"
            price="$21.25"
            order={2}
          />
          <TabelRow
            cusId="#4192"
            sku="Pro 1 Year"
            date="Aug 1nd"
            price="$94.75"
            order={3}
          />
          <TabelRow
            cusId="#99481"
            sku="Pro 1 month"
            date="Aug 1nd"
            price="$9.44"
            order={4}
          />
          <TabelRow
            cusId="#1304"
            sku="Pro 1 Month"
            date="Aug 1st"
            price="$9.23"
            order={5}
          />
          <TabelRow
            cusId="#1304"
            sku="Pro 3 Month"
            date="Aug 31st"
            price="$22.02"
            order={6}
          />
        </tbody>
      </table>
    </div>
  );
}

export default RecentTransitions;

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Custom ID</th>
        <th className="text-start p-1.5">SKU</th>
        <th className="text-start p-1.5">Date</th>
        <th className="text-start p-1.5">Price</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TabelRow = ({
  cusId,
  sku,
  date,
  price,
  order,
}: {
  cusId: string;
  sku: string;
  date: string;
  price: string;
  order: number;
}) => {
  return (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="p-1.5">
        <a
          href="#"
          className="text-violet-600 underline flex items-center gap-1"
        >
          {cusId} <FiArrowRight />
        </a>
      </td>
      <td className="p-1.5">{sku}</td>
      <td className="p-1.5">{date}</td>
      <td className="p-1.5">{price}</td>
      <td className="w-8">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
};
