import formatDate from "@/app/core/formatDate";
import { Event } from "@/app/core/types/types";
import React, { Dispatch, SetStateAction } from "react";

function ExpandedTable({
  event,
  setter,
}: {
  event: Event;
  setter: Dispatch<SetStateAction<string>>;
}) {
  return (
    <tr
      className="flex items-center  py-[30px] px-[41px] h-[291px] w-[964px] bg-white relative -left-8 border border-[#DFDFDF] rounded-[12px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.04)]"
      onClick={() => {
        setter(event.id);
      }}
    >
      <td className="w-1/3 flex flex-col h-full ">
        <div className=" font-medium text-[#929292] text-[14px]">
          <h6>ACTOR</h6>
          <div className="flex flex-row pt-[16px]">
            <p className="text-[#929292] font-normal w-[39px]">Name</p>
            <p className="text-black font-normal ml-[40px]">
              {event.actorName}
            </p>
          </div>
          <div className="flex flex-row pt-[12px]">
            <p className="text-[#929292] font-normal w-[39px]">Email</p>
            <p className="text-black font-normal ml-[40px]">
              {event.targetName}
            </p>
          </div>
          <div className="flex flex-row pt-[12px]">
            <p className="text-[#929292] font-normal w-[39px]">ID</p>
            <p className="text-black font-normal ml-[40px]">{event.id}</p>
          </div>
          <h6 className="mt-[37px]">METADATA</h6>{" "}
          <div className="flex flex-row pt-[12px]">
            <div className="w-[188px] h-[14px] mt-1 bg-[#F8F8F8]  rounded-[2px] animate-pulse"></div>
            {/*Uncomment below to test with data and comment the above line */}
            {/* <p className="text-[#929292] font-normal w-[39px]">ID</p>
              <p className="text-black font-normal ml-[40px]">
                {event.metadata.x_request_id}
              </p> */}
          </div>
        </div>
      </td>
      <td className="w-1/3 flex flex-col h-full">
        <div className=" font-medium text-[#929292] text-[14px]">
          <h6>ACTION</h6>
          <div className="flex flex-row pt-[16px]">
            <p className="text-[#929292] font-normal w-[39px]">Name</p>
            <p className="text-black font-normal ml-[40px]">
              {event.actionName}
            </p>
          </div>
          <div className="flex flex-row pt-[12px]">
            <p className="text-[#929292] font-normal w-[39px]">Object</p>
            <p className="text-black font-normal ml-[40px]">{event.object}</p>
          </div>
          <div className="flex flex-row pt-[12px]">
            <p className="text-[#929292] font-normal w-[39px]">ID</p>
            <p className="text-black font-normal ml-[40px]">{event.actionId}</p>
          </div>
          <h6 className="mt-[37px]">TARGET</h6>
          <div className="flex flex-row pt-[12px]">
            <div className="w-[188px] h-[14px] mt-1 bg-[#F8F8F8]  rounded-[2px] animate-pulse"></div>
            {/*Uncomment below to test with data and comment the above line */}
            {/* <p className="text-[#929292] font-normal w-[39px]">ID</p>
              <p className="text-black font-normal ml-[40px]">
                {event.targetId}
              </p> */}
          </div>
        </div>
      </td>
      <td className="w-1/3 flex flex-col h-full">
        <div className=" font-medium text-[#929292] text-[14px]">
          <h6>DATE</h6>
          <div className="flex flex-row pt-[16px]">
            <p className="text-[#929292] font-normal w-[39px]">Readable</p>
            <p className="text-black font-normal ml-[40px]">
              {formatDate(event.occurredAt)}
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default ExpandedTable;
