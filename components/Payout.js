import Head from "next/head";
import styles from "./Payout.module.css";

export const siteTitle = "Boston Commons Bingo";

export function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Accumulate points while watching people at the Boston Commons"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
