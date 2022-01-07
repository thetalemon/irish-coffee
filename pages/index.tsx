import type { NextPage } from 'next'
import Head from 'next/head'
import { css } from "@emotion/react";
import Image from 'next/image'

import { Login, Logout, auth } from "../lib/firebase";

const footer = css`
  text-align: center;
  margin-top: 32px;
  a {
    display: inline-block;
    margin-bottom: 4px;
  }
`

const main = css`
  margin: 8px;
`

const menuBar = css`
  background: #7c5631;
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

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>プロフィール帳的なもの</title>
        <meta name="description" content="プロフィール帳的なもの" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header css={ menuBar }>
        <h1>ぴよふぃーる帳</h1>
        <div>
          {
            auth.currentUser
              ? (<button css={ loginButton } onClick={() => Logout()}>ログアウト</button>)
              : (<button css={ loginButton } onClick={() => Login()}>ログイン</button>)
          }
        </div>
      </header>

      <main css={main}>
        <div>
          <Image src="/sora.png" alt="me" width="1067" height="800" />
        </div>
        なまえ: <input/><br/>
        好きなたべもの: <input/><br/>
        <div>
          <pre>
            {
              auth.currentUser
              ? auth.currentUser.displayName + "でログインしています"
              : "ログインしていません"
            }
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
        </a><br />
        素材:<a href="https://hiyokoyarou.com/">ぴよたそ</a>様
      </footer>
    </div>
  )
}

export default Home
