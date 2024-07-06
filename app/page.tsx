"use client";

import useSWR from "swr";
import { useState } from "react";
import { Event } from "./core/types/types";
import { Inter } from "next/font/google";

async function getData() {
  const res = await fetch("http://localhost:3000/api/events/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const { data, error, isLoading } = useSWR(
    `/api/events?page=${page}search=${search}`,
    getData
  );
  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-col justify-between m-auto w-[933px] h-[743px] bg-[#ffff] rounded-[15px] border border-[#F0F0F0">
        <div className="flex flex-col w-full h-[108px]  bg-[#F5F5F5]  rounded-t-[15px]">
          <div className="  flex flex-row justify-center">
            <input
              name="search"
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                getData();
              }}
              placeholder="Search name, email or action..."
              className="w-[899px] h-[45px] mt-4 px-4 bg-[#F5F5F5] border border-[#E0E0DF] rounded-[8px] m-auto"
            />
          </div>
          <div className="flex flex-row h-[47px] w-[899px] items-center justify-center m-auto ">
            <h6 className="text-[#616161] w-1/3  text-[14px] font-semibold">
              ACTOR
            </h6>
            <h6 className="text-[#616161] w-1/3 text-[14px] font-semibold">
              ACTION
            </h6>
            <h6 className="text-[#616161] w-1/3 text-[14px] font-semibold">
              DATE
            </h6>
          </div>
        </div>

        <table className=" w-[899px] h-full m-auto">
          <tbody className="">
            {
              //todo:calculate thenumber of remaining rows to get a max
            }
            {data?.events?.map((event: Event) => {
              return (
                <tr
                  key={event.id}
                  className="flex items-center h-[54px]  active:bg-black"
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
            })}
            {isLoading && (
              <tr>
                <td colSpan={3} className="text-center">
                  Loading...
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={3} className="text-center">
                  Error ...
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="h-[52px] flex items-center justify-center bg-[#F5F5F5]  rounded-b-[15px]">
          <p className="text-[#616161]">LOAD MORE</p>
        </div>
      </div>
    </main>
  );
}
