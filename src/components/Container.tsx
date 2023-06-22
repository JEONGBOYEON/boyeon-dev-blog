import metadata from "../data/metadata";
import Head from "next/head";
import Image from "next/image";
import Nav from "./Nav";

export default function Container(props: any) {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    // ...props.customMeta,
  };
  return (
    <div className={`w-full flex flex-col items-center`}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header className={`w-full bg-pink sticky top-0 z-10`}>
        <div
          className={`w-full max-w-7xl flex flex-row justify-between items-center mx-auto`}
        >
          <div className={`flex flex-row items-center m-6`}>
            <Image
              src={`/logo.jpg`}
              alt="로고"
              width={40}
              height={40}
              objectFit={`cover`}
              className={`rounded-full`}
            />
            <span className={`mx-5 font-medium text-xl text-gray-600`}>
              {metadata.title}
            </span>
          </div>
          <Nav />
        </div>
      </header>
      <main className={`flex w-full max-w-3xl`}>{props.children}</main>
    </div>
  );
}

//접두사
//w, max-x

//접두사 뒤에 사이즈
//, https://tailwindcss.com/docs/max-width

//felx
//justify-content: Flex 컨테이너 내의 아이템들을 수평(가로) 방향으로 정렬

//Background
//bg- / slate-50 https://tailwindcss.com/docs/background-color
