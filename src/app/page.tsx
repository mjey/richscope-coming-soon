'use client';

import { BackgroundBeams } from "@/app/components/BackgroundBeams";
import LogoLight from "@/app/components/Logo";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto p-8 text-center space-y-6">
        <div className="flex justify-center">
          <LogoLight className="w-32 h-auto md:w-48 lg:w-56" />
        </div>
        <h1 className="relative z-10 text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-bold leading-tight">
          Unlock Your Financial Future with AI
        </h1>
      </div>
      <BackgroundBeams />
    </div>
  );
}
