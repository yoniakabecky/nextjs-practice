import Link from "next/link";
import Layout from "../components/layout";

function Blog() {
  return (
    <Layout>
      <h1>Blog</h1>
      <Link href="/posts/blog-post-one">
        <a>First blog</a>
      </Link>
    </Layout>
  );
}

export default Blog;
