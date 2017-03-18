import React from 'react';
import SocialMedia from '../sections/social-media';
import AboutMe from '../sections/aboutme';
import ProfileVideo from '../sections/profile-video';
import Copyright from '../sections/copyright';
import homeConfig from '../../config/home';
import Info from '../sections/info';
import InfoImage from '../sections/infoImage';

const Home = React.createClass({
    render: function () {
        document.body.scrollTop = 0;

        return (
            <div>
                <div className="homeContentContainer">
                    <div className="homeContent">
                        <div className="catchPhrase">{homeConfig.catchPhrase}<a href="#info" className="sup">*</a></div>
                        <div className="tagLine">{homeConfig.tagLine}</div>
                    </div>
                    <SocialMedia/>
                </div>
                <div className="homePageTwo">
                    <AboutMe/>
                    <ProfileVideo/>
                    <Info content={homeConfig}/>
                    <InfoImage/>
                    <Copyright/>
                </div>
            </div>
        );
    }
});

export default Home;
