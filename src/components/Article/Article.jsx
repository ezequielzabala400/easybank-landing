import React from 'react'
import { ArticleAuthor, ArticleContainer, ArticleInfo, ArticleText, ArticleTitle } from './ArticleStyles'
import CurrencyImg from '../../../public/assets/img/image-currency.jpg'
import RestaurantImg from '../../../public/assets/img/image-restaurant.jpg'
import PlaneImg from '../../../public/assets/img/image-plane.jpg'
import ConfettiImg from '../../../public/assets/img/image-confetti.jpg'

const Article = ({image,author,title,text}) => {

  const findArticleImage = (img) => {
    switch(img){
      case 'currency':
        return CurrencyImg;
      case 'restaurant':
        return RestaurantImg;
      case 'plane':
        return PlaneImg;
      case 'confetti':
        return ConfettiImg;
        default:
          return;
    }
  }

  return (
      <ArticleContainer>
        <img src={findArticleImage(image)} alt={title} />
        <ArticleInfo>
          <ArticleAuthor>By {author}</ArticleAuthor>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleText>{text}</ArticleText>
        </ArticleInfo>
      </ArticleContainer>
  )
}

export default Article