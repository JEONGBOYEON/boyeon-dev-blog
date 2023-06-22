import { useRouter } from "next/router";
const Post = (params) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Post: {slug}</h1>
      {/* 포스트 내용을 표시하는 부분 */}
    </div>
  );
};

export default Post;
