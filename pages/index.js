import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gray-100 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <p className="font-SF-Compact text-5xl font-thin text-center">
            UNDER CONSTRUCTION
          </p>
        </div>
      </div>
    </div>
  );
}
