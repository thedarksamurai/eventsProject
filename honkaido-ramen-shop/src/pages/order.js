import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/menu.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function order() {
    return(
        <>
            <Head>
                <title>order</title>
            </Head>
            <main>
                <div>
                    <h1>Menu</h1>
                </div>
            </main>
        </>
    )
}