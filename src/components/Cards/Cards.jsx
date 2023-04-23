import React from 'react'
import { CardsContainer, CardsSectionBg, CardsTitles, CardsWrapper } from './CardsStyles'
import Card from '../Card/Card';
import {CardsList} from '../../data/cards'
const Cards = () => {
  return (
    <CardsSectionBg>
    <CardsWrapper>
        <CardsTitles>
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account
                into your financial hub. Control your finances
                like never before.
            </p>
        </CardsTitles>
        <CardsContainer>
            {CardsList.map(card => (<Card key={card.title} {...card}/>))}
        </CardsContainer>
    </CardsWrapper>
    </CardsSectionBg>
  )
}

export default Cards