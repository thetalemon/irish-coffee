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
        お店の名前: <input/><br/>
        所在する都道府県: <input/><br/>
        <input type="file"/>
      </main>

      <Footer />
    </div>
  )
}

export default Home
