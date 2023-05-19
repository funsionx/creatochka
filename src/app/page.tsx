import Image from "next/image";
import RootLayout from "./layout";
import Link from "next/link";
import SuggestionLine from "@/components/major/SuggestionLine/SuggestionLine";
import Search from "@/components/major/Search/Search";

export default function Home() {
  return (
    <>
      <SuggestionLine />
      <Search />
    </>
  );
}
