"use client";

import useSWR from "swr";
import { SetStateAction, useState } from "react";
import { Event } from "./core/types/types";
import ExpandableTableRow from "@/components/normalTableRow";
import NormalTableRow from "@/components/normalTableRow";

async function getData() {
  const res = await fetch("http://localhost:3000/api/events/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [expandedRow, setExpandedRow] = useState("");
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

        <table className=" w-[899px] h-full m-auto flex flex-col">
          <tbody className="">
            {data &&
              data?.events?.map((event: Event) => {
                if (event.id === expandedRow) {
                  return (
                    <tr
                      key={event.id}
                      className="flex items-center h-[291px] w-[964px] bg-white relative -left-8 border border-[#DFDFDF] rounded-[12px]"
                      onClick={() => {
                        setExpandedRow(event.id);
                        // handleRowClick(event.id);
                      }}
                    >
                      <div className="w-full h-full py-[30px] px-[41px] flex justify-center items-center mx-auto">
                        <td className="w-1/3 flex flex-col h-full ">
                          <div className=" font-medium text-[#929292] text-[14px]">
                            <h6>ACTOR</h6>
                            <div className="flex flex-row pt-[16px]">
                              <p className="text-[#929292] font-normal">Name</p>
                              <div className="w-[38px]"></div>
                              <p className="ml-2">{event.actorName}</p>
                            </div>
                          </div>
                        </td>
                        <td className="w-1/3"></td>
                        <td className="w-1/3"></td>
                      </div>
                    </tr>
                  );
                }
                return (
                  <NormalTableRow
                    key={event.id}
                    event={event}
                    setter={setExpandedRow}
                  />
                );
              })}
            {isLoading && (
              <tr className=" ">
                <td colSpan={3} className="text-center ">
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
