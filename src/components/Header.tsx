import Image from "next/image";
import metadata from "@/data/metadata";
import Nav from "@/components/Nav";

export default function Header() {
  return (
    <header
      className={`w-full sticky top-0 z-10 border-b-2 border-pink bg-white`}
    >
      <div
        className={`w-full max-w-7xl flex flex-row justify-between items-center mx-auto`}
      >
        <div className={`flex flex-row items-center m-6`}>
          <Image
            src={`/logo.jpg`}
            alt="로고"
            width={40}
            height={40}
            className={`rounded-full`}
          />
          <span className={`mx-5 font-medium text-xl text-gray-600`}>
            {metadata.title}
          </span>
        </div>
        <Nav />
      </div>
    </header>
  );
}
