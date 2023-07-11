import Container from "@/components/Container";
import Image from "next/image";
//@ts-ignore
import { allPosts } from "contentlayer/generated";
import Post from "@/components/Post";

const HeaderComponent = () => {
  return (
    <div className="flex flex-row max-w-max my-16">
      <div className="mx-8">
        <Image src={`/profile.jpeg`} alt="profile" width={100} height={150} />
      </div>
      <div className="flex flex-col w-auto justify-center space-y-2">
        <div className={`text-2xl font-bold text-gray-800`}>
          안녕하세요. Front 개발자 정보연입니다.
        </div>
        <div>기술을 습득하고 기록하는 공간입니다.</div>
      </div>
    </div>
  );
};

const SNBComponent = ({ posts }: any) => {
  const categories = new Set(posts.map((value: any) => value.category));
  let navInfo = [];
  for (let category of categories) {
    const tags = Array.from(
      new Set(
          posts
          .filter((value: any) => value.category === category)
          .map((value: any) => value.tag)
      )
    );
    navInfo.push({ category, tags });
  }

  return (
    <nav className="w-1/5 mx-6">
      <ul>
        {navInfo.map((value: any, index: number) => (
          <li key={index}>
            <div className="my-2 text-lg text-gray-600">{value.category}</div>
            {value.tags.map((tag: any) => (
              <span key={tag} className="mx-3 text-sm text-gray-500">
                {tag}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Home({ posts }: any) {
  return (
    <>
      <Container>
        <HeaderComponent />
        <div className="flex flex-row h-auto justify-between p-6 border-t-2 border-gray-100">
          <main className="w-4/5">
            {posts?.map((value: any, index: number) => (
              <Post key={index} postInfo={value} />
            ))}
            <div className="flex flex-row m-16 space-x-8 justify-center font-extralight text-xl">
              {[1, 2, 3, 4, 5].map((value) => (
                <span className="hover:text-rose-300" key={value}>
                  {value}
                </span>
              ))}
            </div>
          </main>
          <SNBComponent posts={posts} />
        </div>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = allPosts;
  return {
    props: {
      posts,
    },
  };
};
