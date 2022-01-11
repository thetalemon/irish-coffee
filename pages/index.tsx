import type { NextPage } from 'next'
import Head from 'next/head'
import { css } from "@emotion/react";
import Header from '../components/header'
import Footer from '../components/footer'
import MainList from '../components/itemList/list'
import { ContentList } from '../types/contents'

const main = css`
  margin: 8px;
  flex: 1;
`

const top = css`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`

const contentList: ContentList = [
  {
    id: "1",
    shopName: "おみせ1",
    pref: "東京都",
    imgSrc: "/1.jpeg",
  },
  {
    id: "2",
    shopName: "おみせ",
    pref: "北海道",
    imgSrc: "/2.jpeg",
  },
  {
    id: "3",
    shopName: "おみせ3",
    pref: "大阪府",
    imgSrc: "/3.jpeg",
  },
]

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
        <MainList contentList={contentList} />
      </main>

      <Footer />
    </div>
  )
}

export default Home
