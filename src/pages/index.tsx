import Container from "@/components/Container";

export default function Home() {
  const post = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Container>
        <main className="w-3/4 h-auto mx-3 my-8 space-y-4">
          {post.map((value) => (
            <article key={value} className="h-40 border border-pink">
              <div className={`mx-3 my-2 text-2xl font-extralight`}>
                자바스크립트의 데이터 타입
              </div>
              <div className={`mx-3 font-extralight text-xs overflow-hidden`}>
                자바스크립트는 7개의 데이터 타입을 제공합니다.6개의 원시타입 +
                객체타입아래는 자바스크립트의 원시 타입(Primitive Types)과 객체
                타입(Object Types)을 표로 정리한 것입니다
              </div>
              <footer
                className={`flex flex-row mx-3 my-1 space-x-3 text-xs font-extralight`}
              >
                <div>2023-06-14</div>
              </footer>
            </article>
          ))}
        </main>
        <nav className="w-1/4 mx-3 my-8 border border-pink "></nav>
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
