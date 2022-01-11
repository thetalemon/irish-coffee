import { css } from "@emotion/react";

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

export default function Footer() {
  return (
    <footer css={ footer }>
      <a
        href="https://manasas.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ©︎ manasas
      </a>
    </footer>
  )
}

