import React from 'react'
import { CardImageContainer, CardInfoContainer, CardParagraph, CardTitle } from './CardStyles'
const Card = ({image,title,text}) => {
  return (
    <CardInfoContainer>
        <CardImageContainer>
            <img src={`../../../public/assets/img/icon-${image}.svg`} alt={title} />
        </CardImageContainer>
        <CardTitle>{title}</CardTitle>
        <CardParagraph>{text}</CardParagraph>
    </CardInfoContainer>
  )
}

export default Card