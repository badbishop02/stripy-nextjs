import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Physical NFT's</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Buy my <a href="https://nextjs.org">NFT's!</a>
        </h1>
         <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <img src="https://imgs.search.brave.com/4s4GlHujvxtujLFmHuJuwKPrSHiOZbnCOAV98NxKhdQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/WVAwbFFSY053Nzha/LV9CMXZWckRBSGFI/YSZwaWQ9QXBp" />
            <p>Lion NFT</p>
          </a>
         </div>
         <a className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <img src="https://imgs.search.brave.com/kE4-gvija8HRPZf-hYp5fZWqrdHhKbHJw8hpl-jDfYw/rs:fit:380:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/MHZqalVaQzR1VjNW/OGEyQkRGbkN3SGFK/UCZwaWQ9QXBp" />
            <p>Hyena NFT</p>
          </a>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
