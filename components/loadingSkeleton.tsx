import Chevron from "@/app/core/chevron";
import React from "react";

export default function LoadingSkeleton() {
  return (
    <tr className="flex items-center h-[54px] ">
      <td className="w-1/3">
        <div className="flex">
          <div className="  w-[25px] h-[25px] rounded-full bg-[#F8F8F8] animate-pulse"></div>
          <div className="w-[10px]"></div>
          <div className="w-[132px] h-[14px] bg-[#F8F8F8]  rounded-[2px] animate-pulse"></div>
        </div>
      </td>
      <td className="w-1/3">
        <div className="w-[188px] h-[14px] bg-[#F8F8F8]  rounded-[2px] animate-pulse"></div>
      </td>
      <td className="w-1/3">
        <div className=" flex flex-row justify-between">
          <div className="w-[100px] h-[14px] bg-[#F8F8F8]  rounded-[2px] animate-pulse"></div>
          <Chevron />
        </div>
      </td>
    </tr>
  );
}
