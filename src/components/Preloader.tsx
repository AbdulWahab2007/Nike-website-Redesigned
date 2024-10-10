"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader() {
  const [isloading, setIsloading] = useState("flex");
  const [loaderpercent, setLoaderpercent] = useState("0%");
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
          backgroundImage: `url('/images/loadingScreen.jpg')`,
        }}
        className="preLoader bg-cover bg-center flex justify-center items-center flex-col w-full h-screen fixed bg-white z-50"
      >
        <div className="flex w-2/4 mt-36 itenms-center justify-start">
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
