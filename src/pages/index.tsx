import Container from "@/components/Container";
import Image from "next/image";

const post = [
  {
    title: "자바스크립트의 데이터 타입",
    content:
      "자바스크립트는 7개의 데이터 타입을 제공합니다.6개의 원시타입 객체타입아래는 자바스크립트의 원시 타입(Primitive Types)과 객체 타입(Object Types)을 표로 정리한 것입니다",
    date: "2023-06-14",
  },
  {
    title: "CSS BOX Model",
    content:
      "모든 HTML 요소는 Box 형태의 영역을 가지고 있다. 브라우저는 박스 모델의 크기(dimension)와 프로퍼티(색, 배경, 모양 등), 위치를 근거로 하여 렌더링을 실행한다.웹디자인은 콘텐츠를 담을 박스 모델을 정의하고 CSS 프로퍼티를 통해 스타일(배경, 폰트와모든 HTML 요소는 Box 형태의 영역을 가지고 있다. 브라우저는 박스 모델의 크기(dimension)와 프로퍼티(색, 배경, 모양 등), 위치를 근거로 하여 렌더링을 실행한다.웹디자인은 콘텐츠를 담을 박스 모델을 정의하고 CSS 프로퍼티를 통해 스타일(배경, 폰트와",
    date: "2023-06-18",
  },
  {
    title: "interable용 map, filter, reduce 만들기",
    content:
      "함수형 프로그래밍에서 map, filter, reduce는 매우 활용이 많이 된다.아래처럼 만든 함수은 array(프로토타입 기반, 뿌리를 가진 함수) 뿐만 아니라 interable protocal을 따르는 많은 값 또는 gen함수(문장)들을 사용할 수 있다. => 모",
    date: "2023-06-25",
  },
  {
    title: "자바스크립트의 데이터 타입",
    content:
      "자바스크립트는 7개의 데이터 타입을 제공합니다.6개의 원시타입 객체타입아래는 자바스크립트의 원시 타입(Primitive Types)과 객체 타입(Object Types)을 표로 정리한 것입니다",
    date: "2023-06-14",
  },
  {
    title: "CSS BOX Model",
    content:
      "모든 HTML 요소는 Box 형태의 영역을 가지고 있다. 브라우저는 박스 모델의 크기(dimension)와 프로퍼티(색, 배경, 모양 등), 위치를 근거로 하여 렌더링을 실행한다.웹디자인은 콘텐츠를 담을 박스 모델을 정의하고 CSS 프로퍼티를 통해 스타일(배경, 폰트와모든 HTML 요소는 Box 형태의 영역을 가지고 있다. 브라우저는 박스 모델의 크기(dimension)와 프로퍼티(색, 배경, 모양 등), 위치를 근거로 하여 렌더링을 실행한다.웹디자인은 콘텐츠를 담을 박스 모델을 정의하고 CSS 프로퍼티를 통해 스타일(배경, 폰트와",
    date: "2023-06-18",
  },
  {
    title: "interable용 map, filter, reduce 만들기",
    content:
      "함수형 프로그래밍에서 map, filter, reduce는 매우 활용이 많이 된다.아래처럼 만든 함수은 array(프로토타입 기반, 뿌리를 가진 함수) 뿐만 아니라 interable protocal을 따르는 많은 값 또는 gen함수(문장)들을 사용할 수 있다. => 모",
    date: "2023-06-25",
  },
];

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
            {post.map((value) => (
              <article key={value.title} className="p-3 min-h-max ">
                <div className={`text-2xl font-bold text-gray-600`}>
                  {value.title}
                </div>
                <div className={`my-5 font-extralight text-xs overflow-hidden`}>
                  {value.content}
                </div>
                <footer className={`text-xs font-extralight`}>
                  <div>{value.date}</div>
                </footer>
              </article>
            ))}
          </main>
          <nav className="w-1/6 mx-6">
            <ul>
              {tag.map((value: any) => (
                <li key={value.name}>
                  <div className={`my-2 text-lg text-gray-500`}>
                    #{value.name}
                  </div>
                  <ul>
                    {value.deep.map((deepValue: any) => (
                      <li key={deepValue.name}>
                        <div className={`mx-3 text-sm text-gray-400`}>
                          #{deepValue.name}
                        </div>
                      </li>
                    ))}
                  </ul>
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
