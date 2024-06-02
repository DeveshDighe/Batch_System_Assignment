'use client'

import Download from "@/components/Download";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Features/>
      <Testimonial/>
      <Download/>
    </div>
  );
}
