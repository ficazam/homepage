'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export const HomeIcon = () => {
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => { setIsClient(true) }, [])

  if (!isClient) return null

  return (
    <Link
      href="/"
      className="absolute p-4 pt-10 left-[5%] z-50"
      aria-label="To Site Home"
    >
      <Image
        src="/imgs/Logo.png"
        alt="Felipe Icaza - React, React Native, NextJS, and Python Developer"
        height={72}
        width={72}
      />
    </Link>
  );
};
