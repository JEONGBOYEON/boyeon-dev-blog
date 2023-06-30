import Image from "next/image";
import metadata from "@/data/metadata";
import Nav from "@/components/Nav";

export default function Header() {
  return (
    <header className={`w-full top-o z-10 bg-gray-50 shadow-md fixed`}>
      <div
        className={`w-full max-w-5xl flex flex-row justify-between items-center mx-auto`}
      >
        <div className={`flex flex-row items-center m-6`}>
          {/*<Image*/}
          {/*  src={`/logo.png`}*/}
          {/*  alt="로고"*/}
          {/*  width={40}*/}
          {/*  height={40}*/}
          {/*  className={`rounded-full`}*/}
          {/*/>*/}
          <span className={`mx-2 font-medium text-xl text-main_blod`}>
            {metadata.title}
          </span>
        </div>
        <Nav />
      </div>
    </header>
  );
}
