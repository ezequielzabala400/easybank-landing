import React from 'react';
import { ArticlesContainer, ArticlesListContainer, ArticlesWrapper } from './ArticlesStyles'
import Article from '../Article/Article';
import {articlesList} from '../../data/articles';
const Articles = () => {
  return (
    <ArticlesWrapper>
        <ArticlesContainer>
            <h2>Latest Articles</h2>
        <ArticlesListContainer>
            {articlesList.map((article) => (<Article key={article.title} {...article}/>))}
        </ArticlesListContainer>
        </ArticlesContainer>
    </ArticlesWrapper>
  )
}

export default Articles