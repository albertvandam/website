import React from 'react';
import {connect} from 'react-redux';
import * as bioApi from '../api/bio-api';
import SocialMedia from '../sections/social-media';
import AboutMe from '../sections/aboutme';
import ProfileVideo from '../sections/profile-video';
import Copyright from '../sections/copyright';

const Home = React.createClass({
    componentDidMount: function () {
        bioApi.getBio();
    },

    render: function () {
        document.body.scrollTop = 0;

        return (
            <div>
                <div className="homeContentContainer">
                    <div className="homeContent">
                        <div className="catchPhrase">{this.props.bio.catchPhrase}</div>
                        <div className="tagLine">{this.props.bio.tagLine}</div>
                    </div>
                    <SocialMedia/>
                </div>
                <div className="homePageTwo">
                    <AboutMe title={this.props.bio.title} content={this.props.bio.content} />
                    <ProfileVideo/>
                    <Copyright/>
                </div>
            </div>
        );
    }
});


const mapStateToProps = function (store) {
    return {
        bio: store.bioState.bio
    };
};

export default connect(mapStateToProps)(Home);
