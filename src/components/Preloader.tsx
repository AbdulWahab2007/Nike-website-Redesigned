"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isloading, setIsloading] = useState("flex");
  function loaded() {
    setTimeout(function () {
      setIsloading("none");
    }, 1000);
  }
  useEffect(() => {
    loaded();
  }, []);
  return (
    <>
      <div
        style={{
          display: isloading,
        }}
        className="flex justify-center items-center flex-col w-full h-screen fixed bg-white z-50"
      >
        <div className="w-full flex justify-center">
          <Image
            src="/icons/nike.png"
            width={150}
            height={0}
            alt="Nike logo"
            sizes="100vw"
          />
        </div>
        <div className="flex w-2/4 itenms-center justify-start">
          <motion.div
            className="progress w-2 rounded-lg h-4 bg-gradient-to-r from-fuchsia-700 via-purple-700 to-purple-700"
            animate={{ width: 770 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </>
  );
}
