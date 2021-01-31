import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Banners from './Banners/Banners';
import Journey from './Journey/Journey';
import RegisterationCard from './RegisterationCard/RegisterationCard';
import BenefitsSlider from './BenefitsSlider/BenefitsSlider';
import VideoContainer from './VideoContainer/VideoContainer';
import TakeAssesmentCard from './TakeAssesmentCard/TakeAssesmentCard';
import PartnersSlider from './PartnersSlider/PartnersSlider';
import EventsCard from './EventCard/EventCard';
import HappinessModel from './HappinessModel/HappinessModel';
import Blogs from './Blogs/Blogs';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class HomePage extends Component {

    componentDidMount() {
        this.props.onTryAutoLogin();
    }

    render() {
        return (
            <Auxiliary>
                <Banners />
                <Journey />
                <RegisterationCard register={this.props.onRegister} />
                <BenefitsSlider />
                <VideoContainer />
                <HappinessModel />
                <TakeAssesmentCard />
                <Blogs />
                <PartnersSlider />
                <EventsCard />
            </Auxiliary>
        )
    }
}

const mapDispathToProps = dispatch => {
    return {
        onTryAutoLogin: () => dispatch(actions.tryAutoLogin()),
        onRegister: (email, contact) => dispatch(actions.saveMailAndContact(email, contact))
    }
}

export default connect(null, mapDispathToProps)(HomePage);