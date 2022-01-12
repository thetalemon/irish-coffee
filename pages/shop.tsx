import type { NextPage } from 'next'
import Head from 'next/head'
import { css } from "@emotion/react";
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'
import { Content } from '../types/contents'

const main = css`
  margin: 8px;
  flex: 1;
`

const top = css`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`

const image = css`
  /* border-radius: 30px; */
`

const content: Content = 
  {
    id: "1",
    shopName: "おみせ1",
    pref: "東京都",
    imgSrc: "/1.jpeg",
  }

const Home: NextPage = () => {
  return (
    <div css={ top }>
      <Head>
        <title>あいりこ【アイリッシュコーヒー口コミサイト】</title>
        <meta name="description" content="アイリッシュコーヒー口コミサイト: あいりこ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main css={main}>
        <h1>{content.shopName}({content.pref})</h1>
        <Image css={image} src={content.imgSrc} alt={content.shopName} width="300" height="200" objectFit="contain" />

        
        {/* <MainList contentList={contentList} /> */}
      </main>

      <Footer />
    </div>
  )
}

export default Home
