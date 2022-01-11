import { css } from "@emotion/react";
import Image from 'next/image'
import { Content } from '../../types/contents'

const card = css`
  padding: 4px;
  text-align: center;
`

const image = css`
  border-radius: 30px;
`

type Props = {
  content: Content
}

export default function Item(props:Props) {
  return (
    <li css={card}>
      <Image css={image} src={props.content.imgSrc} alt={props.content.shopName} width="120" height="120" />
      <h2>{props.content.shopName}</h2>
      <p>{props.content.pref}</p>
    </li>
  )
}

