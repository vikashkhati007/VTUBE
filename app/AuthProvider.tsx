"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import NextNProgress from 'nextjs-progressbar';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  return(
<SessionProvider>
    <NextNProgress />
    {children}</SessionProvider>
  ) ;
}
