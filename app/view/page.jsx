"use client";
import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Sidebar from "@/components/organisms/Sidebar";
// import { Terrain } from '@/components/atoms/Terrain'
const Table = dynamic(
  () => import("@/components/canvas/Models").then((mod) => mod.Table),
  { ssr: false }
);

const View = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        {/* <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg> */}
      </div>
    ),
  }
);

const Common = dynamic(
  () => import("@/components/canvas/View").then((mod) => mod.CommonRotation),
  { ssr: false }
);

const Page = ({}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <Sidebar
        isOpen={sidebarOpen}
        toggleOpen={() => setSidebarOpen(!sidebarOpen)}
        details={{
          title: "O1",
          type: "Signature table",
          dimensions: "120 x 80 x 75 cm",
          description: `A desk made from rubber wood, a very sustainable, hardwood.
                     Simplicity is emphasised here, and practicality is hidden in the
                     details. A fully flat-pack design with rails for hanging items
                     underneath, to keep the surface clear.`,
        }}
      />
      <div className="flex flex-col md:flex-row">
        <div className="w-80 shrink-0 px-4"></div>
        <div className="h-screen w-full flex items-center justify-center px-8 cursor-pointer">
          {/* <img
            alt="main carousel image"
            className="object-cover h-[80vh]"
            src="/img/carousel.png"
          /> */}
          <Suspense fallback={null}>
            <View
              orbit
              className="flex h-screen w-full flex-col items-center justify-center"
            >
              <Table />
              <Common />
            </View>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Page;
