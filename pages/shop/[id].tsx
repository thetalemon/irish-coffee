import type { NextPage, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { css } from "@emotion/react";
import Header from '../../components/header'
import Footer from '../../components/footer'
import Image from 'next/image'
import { Content, ContentList } from '../../types/contents'

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

type Props = {
  content: Content
}

export default function Shop(props:Props) {
  return (
    <div css={ top }>
      <Head>
        <title>あいりこ【アイリッシュコーヒー口コミサイト】</title>
        <meta name="description" content="アイリッシュコーヒー口コミサイト: あいりこ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main css={main}>
        <h1>{props.content.shopName}({props.content.pref})</h1>
        <Image css={image} src={props.content.imgSrc} alt={props.content.shopName} width="300" height="200" objectFit="contain" />
      </main>

      <Footer />
    </div>
  )
}

export const getStaticPaths = async () => {
  const data:ContentList = contentList

  const paths = data.map((content) => `/shop/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  if(!context.params) throw Error
  const id = context.params.id;
  if(!id) throw Error
  
  const targetData: Content[] = contentList.filter(content => content.id === id)
  if(targetData.length !== 1) throw Error

  const data: Content = targetData[0]

  return {
    props: {
      content: data
    },
  };
};
