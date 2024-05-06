"use client";

import React from "react";
import Image from "next/image";


export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center -mt-8">
      <div className="flex flex-row-reverse items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/note-pic1.jpg"
            fill
            alt="document"
            className="object-contain"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src="/note-pic3.jpg"
            alt="notes"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
