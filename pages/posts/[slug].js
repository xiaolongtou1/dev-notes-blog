import Link from "next/link";
import { getAllPostSlugs, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.slug);

  return {
    props: {
      post
    }
  };
}

export default function Post({ post }) {
  return (
    <main className="container">
      <Link href="/">← Back to home</Link>
      <h1>{post.title}</h1>
      <p>{post.date}</p>

      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}