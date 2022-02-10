import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Primeiro post</title>
      </Head>
      <h1>Primeiro post</h1>
      <h2>
        <Link href="/">
          <a>De volta a página inicial!</a>
        </Link>
      </h2>
    </Layout>
  );
}
