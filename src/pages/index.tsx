import Container from "@/components/Container";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import Post from "@/components/Post";

const tag = [
  {
    name: "Javascript",
    deep: [{ name: "basic" }, { name: "최적화" }, { name: "데이터구조" }],
  },
  {
    name: "React",
    deep: [{ name: "상태 관리" }, { name: "구조" }, { name: "hooks" }],
  },
];

export default function Home() {
  return (
    <>
      <Container>
        <div className="flex flex-row max-w-max my-28">
          <div className="mx-8">
            <Image
              src={`/profile.jpeg`}
              alt="profile"
              width={100}
              height={150}
            />
          </div>
          <div className="flex flex-col w-auto justify-center space-y-2">
            <div className={`text-2xl font-bold text-gray-600`}>
              안녕하세요 👋 Front 개발자 정보연입니다.
            </div>
            <div>기술을 습득하고 기록하는 공간입니다.</div>
          </div>
        </div>
        <div className="flex flex-row h-auto justify-between">
          <main className="w-4/6">
            {allPosts.map((value, index) => (
              <Post key={index} postInfo={value} />
            ))}
          </main>
          <nav className="w-1/6 mx-6">
            <ul>
              {tag.map((value: any, index: number) => (
                <li key={index}>
                  <div className={`my-2 text-lg text-gray-500`}>
                    {value.name}
                  </div>
                  {value.deep.map((deepValue: any, index2: number) => (
                    <span key={index2} className={`mx-3 text-sm text-gray-400`}>
                      #{deepValue.name}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>

      {/*<footer className="bg-gray-200 py-4">*/}
      {/*  <div className="container mx-auto px-4">*/}
      {/*    <p className="text-center text-gray-500">*/}
      {/*      © 2023 My Blog. All rights reserved.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</footer>*/}
    </>
  );
}
