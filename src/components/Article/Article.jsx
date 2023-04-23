import React from 'react'
import { ArticleAuthor, ArticleContainer, ArticleInfo, ArticleText, ArticleTitle } from './ArticleStyles'
import {} from '../../../public/assets/img/image-confetti.jpg'

const Article = ({image,author,title,text}) => {
  return (
      <ArticleContainer>
        <img src={`../../../public/assets/img/image-${image}.jpg`} alt={title} />
        <ArticleInfo>
          <ArticleAuthor>By {author}</ArticleAuthor>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleText>{text}</ArticleText>
        </ArticleInfo>
      </ArticleContainer>
  )
}

export default Article