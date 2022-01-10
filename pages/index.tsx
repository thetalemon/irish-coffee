import type { NextPage } from 'next'
import Head from 'next/head'
import { css } from "@emotion/react";
import Image from 'next/image'

import { Login, Logout, auth } from "../lib/firebase";

const footer = css`
  background: #89643f;
  color: #fff;
  text-align: center;
  margin-top: 32px;
  padding: 4px 0;
  a {
    display: inline-block;
    margin-bottom: 4px;
  }
  fixed: bottom;
`

const main = css`
  margin: 8px;
  flex: 1;

`

const multiple = css`
  margin: 0 4px;
`

const titleIcon = css`
  margin-right: 8px;
`

const menuBar = css`
  background: #89643f;
  color: #fff;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 18px;
    margin: 0;
  }
`

const loginButton = css`
  background: transparent;
  color: #fff;
  padding: 8px;
  margin: auto 0;
  border-radius: 10px;
  border: solid 1px #fff;
  padding: 4px 8px;
`

const top = css`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`

const cardList = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
`

const card = css`
  padding: 4px;
  text-align: center;
`

const image = css`
  border-radius: 30px;
`

const Home: NextPage = () => {
  return (
    <div css={ top }>
      <Head>
        <title>あいりこ【アイリッシュコーヒー口コミサイト】</title>
        <meta name="description" content="アイリッシュコーヒー口コミサイト: あいりこ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header css={ menuBar }>
        <h1>
          <span css={ titleIcon }>
            <Image src="/whisky.png" alt="ウイスキー" width="20" height="20" />
            <span css={ multiple }>×</span>        
            <Image src="/coffee.png" alt="豆" width="20" height="20" />
          </span>
          <span>あいりこ</span>
        </h1>
        <div>
          {
            auth.currentUser
              ? (<button css={ loginButton } onClick={() => Logout()}>ログアウト</button>)
              : (<button css={ loginButton } onClick={() => Login()}>ログイン</button>)
          }
        </div>
      </header>

      <main css={main}>
        ここに画像と店名で一覧を出す
        <ul css={cardList}>
          <li css={card}>
            <Image css={image} src="/1.jpeg" alt="おみせ1" width="120" height="120" />
            <h2>おみせ1</h2>
            <p>東京都</p>
          </li>
          <li css={card}>
            <Image css={image} src="/2.jpeg" alt="おみせ2" width="120" height="120" />
            <h2>おみせ2</h2>
            <p>東京都</p>
          </li>
          <li css={card}>
            <Image css={image} src="/3.jpeg" alt="おみせ3" width="120" height="120" />
            <h2>おみせ3</h2>
            <p>東京都</p>
          </li>
        </ul>

        {/* 
        <div>
          <pre>
            {
              auth.currentUser
              ? auth.currentUser.displayName + "でログインしています"
              : "ログインしていません"
            }
          </pre>
        </div> */}
      </main>

      <footer css={ footer }>
        <a
          href="https://manasas.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©︎ manasas
        </a>
      </footer>
    </div>
  )
}

export default Home
