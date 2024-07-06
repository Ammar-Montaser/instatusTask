"use client";
import { Event } from "@/app/core/types/types";
import React, { Dispatch, SetStateAction } from "react";
export default function NormalTableRow({
  event,
  setter,
}: {
  event: Event;
  setter: Dispatch<SetStateAction<string>>;
}) {
  return (
    <tr
      className="flex items-center h-[54px] "
      onClick={() => {
        setter(event.id);
      }}
    >
      <td className="w-1/3">
        <div className="flex">
          <div className="  w-[25px] h-[25px] rounded-full bg-gradient-to-br from-[#F3994A] to-[#B325E2]">
            <p className="text-white font-[12px] text-center">
              {event.actorName[0].toUpperCase()}
            </p>
          </div>
          <div className="w-[10px]"></div>
          <p className="text-[#1C1C1C]">{event.targetName}</p>
        </div>
      </td>
      <td className="w-1/3">
        <p className="text-[#1C1C1C]"> {event.actionName}</p>
      </td>
      <td className="w-1/3">
        <div className=" flex flex-row justify-between">
          <p className="text-[#1C1C1C]">
            {Intl.DateTimeFormat("en-US", {
              month: "short", // abbreviated month
              day: "numeric", // numeric day
              hour: "numeric", // numeric hour
              minute: "numeric", // numeric minutes
              hour12: true, // 12-hour format
            }).format(new Date(event.occurredAt))}
          </p>
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="my-auto"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.317323 0.284414C0.74042 -0.0948047 1.4264 -0.0948047 1.84949 0.284414L8.34995 6.11072C8.77304 6.48993 8.77304 7.10477 8.34995 7.48399L1.84949 13.3103C1.4264 13.6895 0.74042 13.6895 0.317323 13.3103C-0.105774 12.9311 -0.105774 12.3162 0.317323 11.937L6.05169 6.79735L0.317323 1.65769C-0.105774 1.27847 -0.105774 0.663633 0.317323 0.284414Z"
              fill="#EEEEEE"
            />
          </svg>
        </div>
      </td>
    </tr>
  );
}
