import type { NextPage } from 'next'
import Head from 'next/head'
import { css } from "@emotion/react";

import { Login, Logout, auth } from "../lib/firebase";

const title = css`
  color: hotpink;
  text-align: center;
  margin-bottom: 24px;
`

const footer = css`
  text-align: center;
  margin-top: 32px;
`

const main = css`
  margin:8px;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>プロフィール帳的なもの</title>
        <meta name="description" content="プロフィール帳的なもの" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        ここメニューバー
      </header>

      <main css={ main }>
        <h1 css={title}>
          ぷろふ帳
        </h1>

        <div>
          <button onClick={() => Login()}>ログイン</button>
          <button onClick={() => Logout()}>ログアウト</button>
        </div>
        <div>
          <pre>
            {auth.currentUser
              ? auth.currentUser.displayName + "でログインしています"
              : "ログインしていません"}
          </pre>
        </div>
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
