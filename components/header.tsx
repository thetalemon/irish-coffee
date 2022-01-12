import { css } from "@emotion/react";
import Image from 'next/image'
import { Login, Logout, auth } from "../lib/firebase";

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

export default function Header() {
  return (
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
  )
}

