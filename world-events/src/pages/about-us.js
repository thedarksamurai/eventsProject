import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function aboutUs(){
    return(
        <>
        <Head>
        <title>About Hokkaido Ramen Shop</title>
        <meta name="description" content="Japanese ramen, sweets and tea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        </>
    )
}