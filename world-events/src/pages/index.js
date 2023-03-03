import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hokkaido Ramen Shop</title>
        <meta name="description" content="Japanese ramen, sweets and tea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.nav}>
          <ol>
            <li><a href=''>Home</a></li>
            <li><a href=''>Order</a></li>
            <li><a href=''>Events</a></li>
            <li><a href=''>About Us</a></li>
          </ol>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.description}>

        </div>
      </main>
    </>
  )
}
