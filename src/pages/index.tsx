import Head from "next/head";
import styles from "./home.module.scss";
import { SubscribeButton } from "../components/SubscribeButton";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.container}>
        <article className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about
            <br />
            the <span>React</span> world
          </h1>
          <p>
            Get access to all publications
            <br />
            <span>for $9.90/month</span>
          </p>
          <SubscribeButton />
        </article>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
