import Camp from "@/components/camp";
import Features from "@/components/features";
import GetApp from "@/components/getApp";
import Guide from "@/components/guide";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
    </ div>
  );
}
