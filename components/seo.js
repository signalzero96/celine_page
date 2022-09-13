import Head from 'next/head';

export default function Seo({ title }) {
  return (
    <div>
      <Head>
        <title>{title} | Celine page</title>
      </Head>
    </div>
  );
}
