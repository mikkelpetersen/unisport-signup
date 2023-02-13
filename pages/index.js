import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Unisport Membership Signup</title>
        <meta name="description" content="Become a Unisport Member for free today and get access to limited products and exclusive offers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={inter.className}>
        <h1>Hello World.</h1>
      </main>
    </>
  )
}
