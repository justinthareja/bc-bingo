import Head from "next/head";
import Image from "next/image";
import styles from "./Layout.module.css";

export const siteTitle = "Boston Commons Bingo";

export function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Accumulate points while watching people at the Boston Commons"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className={styles.bgWrap}>
        <Image
          src="/images/bc-ducks.jpeg"
          alt="Boston Commons Ducks"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
