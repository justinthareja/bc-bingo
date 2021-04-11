import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I&rsquo;m Justin Thareja. I&rsquo;m a software engineer and
          snowboarder. Check out my latest work{" "}
          <a href="http://justinthareja.com">here</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <p>
          <Link href="/pages/first-post">My First Post</Link>
          <br />
          <small className={utilStyles.lightText}>April 4, 2021</small>
        </p>
      </section>
    </Layout>
  );
}
