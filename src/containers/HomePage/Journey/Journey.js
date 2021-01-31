import React, { Component } from 'react';
import classes from './Journey.module.css';
import Cards from './Cards/Cards';

class Journey extends Component {

    state = {
        cards: [
            { id: 0, title: 'Career-Women', avatarImg: 'https://devsaycheese.com/assets/images/journey/avatar1.jpeg', subTitle: 'Glass Ceiling Discrimination', background: 'https://devsaycheese.com/assets/images/journey/desktop/career-woman.webp' },
            { id: 1, title: 'Homepreneur', avatarImg: 'https://devsaycheese.com/assets/images/journey/avatar2.webp', subTitle: 'Business expansion Brand visibility', background: 'https://devsaycheese.com/assets/images/journey/desktop/homepreneur.webp' },
            { id: 2, title: 'Homemaker', avatarImg: 'https://devsaycheese.com/assets/images/journey/avatar3.jpeg', subTitle: 'Financial dependence', background: 'https://devsaycheese.com/assets/images/journey/desktop/homemaker.webp' },
            { id: 3, title: 'Student', avatarImg: 'https://devsaycheese.com/assets/images/journey/avatar4.jpeg', subTitle: 'Career planning Loneliness', background: 'https://devsaycheese.com/assets/images/journey/desktop/student.webp' }
        ],
        selectedCard: 0,
    }

    selectedCardChangeHandler = slectedIndex => {
        this.setState({
            selectedCard: slectedIndex,
        });
    }


    render() {
        return (
            <div className={classes.Journey} style={{ backgroundImage: 'url(' + this.state.cards[this.state.selectedCard].background + ')' }}>
                <h1 className={classes.Title}>Who can benefit?</h1>
                <Cards cards={this.state.cards} selectedCard={this.state.selectedCard} selectedCardChangeHandler={this.selectedCardChangeHandler} />
            </div>
        )
    }

}

export default Journey