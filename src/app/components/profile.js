import React from 'react';
import SkillList from '../sections/skills';
import Copyright from '../sections/copyright';
import profile from '../../config/profile';

const Profile = React.createClass({
    render: function () {
        document.body.scrollTop = 0;

        return (
            <div>
                <div className="profile">
                    <div className="content">
                        {profile.map((entry, index) => {
                            return (
                                <div key={index}>
                                    <h3>{entry.title}</h3>{entry.content.map((paragraph, paragraphIndex) => {
                                    return (
                                        <p key={paragraphIndex}>{paragraph}</p>
                                    );
                                })}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <SkillList/>

                <Copyright/>
            </div>
        );
    }
});

export default Profile;
