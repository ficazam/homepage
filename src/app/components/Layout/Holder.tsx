"use client";
import { useState } from "react";
import { ContentHolder } from "./Content-Holder";
import { Header } from "./Header";

export const Holder = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <div className="flex flex-col overflow-hidden">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <ContentHolder isOpen={isOpen}>{children}</ContentHolder>
    </div>
  );
};
