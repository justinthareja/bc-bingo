import Head from "next/head";
import Link from "next/link";
import { Layout, siteTitle } from "../components/Layout";
import { B } from "../components/BingoCard";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Boston Commons Bingo</h1>
        <Link href="/bingo">
          <a>Play Now</a>
        </Link>
      </section>
    </Layout>
  );
}
