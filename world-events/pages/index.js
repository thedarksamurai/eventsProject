import Head from 'next/head';
import { HomePage } from '../src/components/home/home-page';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Events By3</title>
        <meta name="description" content="World Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}
