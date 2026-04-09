import Link from "next/link";
import { getSortedPosts } from "../lib/posts";

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts
    }
  };
}

export default function Home({ posts }) {
  return (
    <main className="container">
      <h1>Dev Notes Blog</h1>
      <p>A simple blog for practicing GitHub Actions.</p>

      <ul className="postList">
        {posts.map((post) => (
          <li key={post.slug} className="postItem">
            <Link href={`/posts/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.date}</p>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}