import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "./home.module.scss";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

type HomeProps = {
  product: {
    priceId: string;
    amount: string;
  };
};

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount}/month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </article>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const price = await stripe.prices.retrieve("price_1O9uzWJatRp8s8kkGrtcDD4d");

  return {
    props: {
      product: {
        priceId: price.id,
        amount: new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price.unit_amount / 100),
      },
    },
  };
};
