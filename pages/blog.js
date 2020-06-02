import Link from "next/link";
import Layout from "../components/layout";
import SubPageHero3 from "../components/subPageFramer";

function Blog() {
  return (
    <Layout>
      <SubPageHero3 title="blog blog blog" subTitle="this is subtitle" />
      <Link href="/posts/blog-post-one">
        <a>First blog</a>
      </Link>
    </Layout>
  );
}

export default Blog;
