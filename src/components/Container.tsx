import metadata from "../data/metadata";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <Header />
      <main className={`flex flex-col w-full max-w-3xl items-center mt-20`}>
        {props.children}
      </main>
      <Footer />
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

//위에 고정
//sticky top-0 z-10
