"use client";
import Chevron from "@/app/core/chevron";
import formatDate from "@/app/core/formatDate";
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
          <p className="text-[#1C1C1C]">{formatDate(event.occurredAt)}</p>
          <Chevron />
        </div>
      </td>
    </tr>
  );
}
