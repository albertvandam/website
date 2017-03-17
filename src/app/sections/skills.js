import React from 'react';
import SkillStrength from '../constants/skill-strengths';

export default function (props) {
    if (props.hasOwnProperty('skills') && 'undefined' !== typeof(props.skills)) {
        return (
            <div className="skillsContainer">
                <div className="skills">
                    <h3>Skills</h3>

                    {props.skills.map(skill => {
                        let strength = SkillStrength[skill.strength.toString()];

                        return (
                            <div className="skill" key={skill.name}>
                                <div className="sk-title">{skill.name}</div>
                                <div className="strength"><i className="material-icons">{strength}</i></div>
                            </div>
                        );

                    })}
                </div>
            </div>
        );
    }

    return (
        <span />
    );
}
