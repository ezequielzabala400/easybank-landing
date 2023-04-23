import React from 'react'
import { CardImageContainer, CardInfoContainer, CardParagraph, CardTitle } from './CardStyles'
import OnlineIcon from '../../../public/assets/img/icon-online.svg'
import BudgetingIcon from '../../../public/assets/img/icon-budgeting.svg'
import BoardingIcon from '../../../public/assets/img/icon-onboarding.svg'
import ApiIcon from '../../../public/assets/img/icon-api.svg'



const Card = ({image,title,text}) => {

  const findCardImage = (img) => {
    switch(img){
      case 'online':
        return OnlineIcon;

      case 'budgeting':
        return BudgetingIcon

      case 'onboarding':
        return BoardingIcon

      case 'api':
        return ApiIcon

      default:
        break;
    }
  }

  return (
    <CardInfoContainer>
        <CardImageContainer>
            <img src={findCardImage(image)} alt={title} />
        </CardImageContainer>
        <CardTitle>{title}</CardTitle>
        <CardParagraph>{text}</CardParagraph>
    </CardInfoContainer>
  )
}

export default Card