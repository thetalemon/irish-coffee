import { css } from "@emotion/react";
import { Content, ContentList } from '../../types/contents'
import Item from './item'


const cardList = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
`

type Props = {
  contentList: ContentList
}

export default function MainList(props:Props) {
  return (
    <ul css={cardList}>
      {props.contentList.map((content: Content) => (
        <Item key={content.id} content={content} />
      ))}
    </ul>
  )
}

