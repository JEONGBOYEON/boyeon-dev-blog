import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = (props: any) => {
  const { postInfo } = props;
  const MDXComponent = useMDXComponent(postInfo.body.code);

  return (
    <article className="p-3 ">
      <Link href={`/blog/${postInfo._raw.flattenedPath}`} passHref>
        <div
          className={`my-3 text-2xl font-bold text-gray-600 hover:text-rose-300`}
        >
          {postInfo.title}
        </div>
      </Link>
      <div className={`flex flex-row font-extralight text-xs space-x-2`}>
        <div className={`p-1.5 border-2 rounded-lg hover:border-rose-200`}>
          {postInfo.category}
        </div>
        <div className={`p-1.5 border-2 rounded-lg hover:border-rose-300`}>
          {postInfo.tag}
        </div>
      </div>
      <div className={`my-5 font-extralight text-xs max-h-12 overflow-hidden`}>
        <MDXComponent />
      </div>
      <footer className={`text-xs font-extralight`}>
        <div>{postInfo.date}</div>
      </footer>
    </article>
  );
};

export default Post;
