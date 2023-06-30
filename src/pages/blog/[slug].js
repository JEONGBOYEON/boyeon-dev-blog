//@ts-ignore
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Container from "../../components/Container";

const Post = ({ post }) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container>
      <div className="mt-10">
        <div className={`text-3xl font-bold text-main`}>{post.title}</div>
        <div className={`my-3 text-xs font-extralight`}>
          <div>{post.date}</div>
        </div>
        <div className={`border-b-2 border-gray-50 my-10 prose`}>
          <MDXComponent />
        </div>
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
