import React from "react";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/logo-alt.png" alt="Logo" width={40} height={40} />
      <p className={cn("font-semibold", font.className)}>Noteverse</p>
    </div>
  );
};

export default Logo;
