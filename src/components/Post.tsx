import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = (props: any) => {
  const { postInfo } = props;
  const MDXComponent = useMDXComponent(postInfo.body.code);

  return (
    <article className="p-3 border-b">
      <Link href={`/blog/${postInfo._raw.flattenedPath}`} passHref>
        <div
          className={`flex flex-row my-3 text-2xl font-bold text-gray-600 hover:text-rose-300`}
        >
          {postInfo.title}
        </div>
      </Link>
      <div className={`my-5 font-extralight text-xs max-h-12 overflow-hidden`}>
        <MDXComponent />
      </div>
      <footer className={`flex flex-row text-xs font-extralight`}>
        <div>{postInfo.date}</div>
        <div className={`pl-2 ml-2 border-l-2`}>{postInfo.category}</div>
        <div className={`pl-2 ml-2 border-l-2`}>#{postInfo.tag}</div>
      </footer>
    </article>
  );
};

export default Post;
