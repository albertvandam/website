import React from 'react';
import SkillStrength from '../constants/skill-strengths';
import skills from '../../config/skills';

export default function () {
    return (
        <div className="skillsContainer">
            <div className="skills">
                <h3>Skills</h3>

                {skills.map(skill => {
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
