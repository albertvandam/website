import React from 'react';
import {connect} from 'react-redux';
import SkillList from '../sections/skills';
import * as skillsApi from '../api/skills-api';
import * as profileApi from '../api/profile-api';
import Copyright from '../sections/copyright';

const Profile = React.createClass({
    componentDidMount: function () {
        skillsApi.getSkills();
        profileApi.getProfile();
    },

    render: function () {
        document.body.scrollTop = 0;

        return (
            <div>
                <div className="profile">
                    <div className="content">
                        {this.props.profile.map((entry, index) => {
                            return (
                                <div key={index}>
                                    <h3>{entry.title}</h3>
                                    {entry.content.map((paragraph, pindex) => {
                                        return (
                                            <p key={pindex}>{paragraph}</p>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <SkillList skills={this.props.skills}/>

                <Copyright/>
            </div>
        );
    }
});

const mapStateToProps = function (store) {
    return {
        skills : store.skillState.skills,
        profile: store.profileState.profile
    };
};

export default connect(mapStateToProps)(Profile);
