import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function aboutUs(){
    return(
        <>
        <Head>
        <title>About us</title>
        <meta name="description" content="Japanese ramen, sweets and tea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        <h1>Our story</h1>
        <p></p>
      </section>
      <section className={styles.main}>
        <h1>Our Misson</h1>
      </section>
      <section>
        <h1>The future is bright</h1>
      </section>
        </>
    )
}