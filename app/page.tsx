"use client";

import useSWR from "swr";
import { useCallback, useState } from "react";
import { Event } from "./core/types/types";
import NormalTableRow from "@/components/normalTableRow";
import ExpandedTable from "@/components/expandedTableRow";
import LoadingSkeleton from "@/components/loadingSkeleton";
import Export from "./core/export";
import saveAs from "file-saver";

export default function Home() {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

  const [search, setSearch] = useState("");
  const [expandedRow, setExpandedRow] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const { data, error, isLoading } = useSWR(
    `/api/events?page=${page}&limit=${limit}&search=${search}`,
    fetcher
  );

  const exportToCSV = useCallback(async () => {
    const response = await fetch(`/api/events?search=${search}`);
    const events = await response.json();
    const csvHeaders = Object.keys(events.events[0]).join(",");
    const csvData = [
      csvHeaders,
      ...events.events.map((event: Event) => Object.values(event).join(",")),
    ].join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const fileName = "events.csv";
    saveAs(blob, fileName);
  }, [search]);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col justify-between m-auto w-[933px] mt-10 mb-10 bg-[#ffff] rounded-[15px] border border-[#F0F0F0] ">
        <div className="flex flex-col w-full h-[108px]  bg-[#F5F5F5]  rounded-t-[15px]">
          <div className="  flex flex-row  justify-start items-center m-auto">
            <input
              name="search"
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search name, email or action..."
              className="w-[800px] h-[45px] mt-4 px-4 bg-[#F5F5F5] border border-[#E0E0DF]  rounded-l-[8px] m-auto"
            />

            <button
              className="flex h-[45px] justify-center items-center mt-4 px-4  border-t border-b border-r rounded-r-[8px] border-[#E0E0DF]"
              onClick={exportToCSV}
            >
              <Export />
              <p className="text-[12px] font-normal text-[#575757] mt-1">
                EXPORT
              </p>
            </button>
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

        <table className=" w-[899px]  mx-auto flex flex-col min-h-[583px] ">
          <tbody className="flex flex-col">
            {error && (
              <tr>
                <td className="min-h-[583px] h-full w-full flex flex-col  items-center justify-center">
                  Failed to load
                </td>
              </tr>
            )}
            {isLoading &&
              Array.from({ length: 11 }, (_, index) => (
                <LoadingSkeleton key={index} />
              ))}
            {data &&
              data?.events?.map((event: Event) => {
                if (event.id === expandedRow) {
                  return (
                    <ExpandedTable
                      key={event.id}
                      event={event}
                      setter={setExpandedRow}
                    />
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
            {data?.events?.length < 11 &&
              Array.from({ length: 11 - data?.events?.length }, (_, index) => (
                <LoadingSkeleton key={index} />
              ))}
          </tbody>
        </table>
        <div className="h-[52px] flex items-center justify-center bg-[#F5F5F5]  rounded-b-[15px]">
          <button
            className="text-[#616161]"
            disabled={data?.events?.length < limit}
            onClick={() => setLimit((prev) => prev + 5)}
          >
            LOAD MORE
          </button>
        </div>
      </div>
    </main>
  );
}
