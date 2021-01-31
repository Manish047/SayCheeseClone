import React from 'react';
import classes from './Cards.module.css';

import Card from './Card/Card';

const Cards = props => {
    let cards = props.cards.map((card, index) => {
        return <Card
            key={card.id}
            title={card.title}
            img={card.avatarImg}
            subTitle={card.subTitle}
            clicked={() => props.selectedCardChangeHandler(index)}
            active={card.id === props.selectedCard ? true : false}
        />
    });
    return (
        <div className={classes.Cards}>
            {cards}
        </div>
    );
}

export default Cards;