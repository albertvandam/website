/* globals: IMAGE_URL: false */
import React from 'react';
import Copyright from '../sections/copyright';
import projects from '../../config/projects';

const Code = React.createClass({
    openLink: function (link) {
        window.open(link);
    },

    render: function () {
        document.body.scrollTop = 0;

        return (
            <div>
                <div className="code">
                    {projects.map((project, prIndex) => {
                        let githubLink = project.hasOwnProperty('github') ? (
                                <img src={IMAGE_URL + '/github-box.svg'} className="githubLink"
                                     width={28} height={28} onClick={() => this.openLink(project.github)}
                                     alt="GitHub" title="View on GitHub"/>
                            ) : '';

                        if (project.hasOwnProperty('icon')) {
                            githubLink = (
                                <img src={project.icon.replace('{IMGURL}', IMAGE_URL)} className="githubLink"
                                     width={28} height={28} onClick={() => this.openLink(project.link)}
                                     alt={project.title} title={project.title}/>
                            );
                        }

                        let features = project.hasOwnProperty('features') ? (
                                <div>
                                    <ul className="pr-features">
                                        {project.features.map((feature, index) => {
                                            return (
                                                <li key={index}>{feature}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            ) : '';

                        let stack = project.hasOwnProperty('tech') ? (
                                <div>
                                    <ul className="pr-tech">
                                        {project.tech.map((tech, index) => {
                                            return (
                                                <li key={index}>{tech}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            ) : '';

                        let screens = project.hasOwnProperty('screens') ? (
                                <div>
                                    {project.screens.map((screen, index) => {
                                        return (
                                            <img className="screen" src={screen.replace('{IMGURL}', IMAGE_URL)} alt={project.title} key={index}/>
                                        )
                                    })}
                                </div>
                            ) : '';

                        return (
                            <div className="project" key={prIndex}>
                                <div className="projectBox">
                                    <h3 className="pr-title">{project.title}{githubLink}</h3>
                                    <div className="pr-desc">{project.description}</div>
                                    {features} {stack} {screens}
                                </div>
                            </div>
                        );
                    })} <span className="clearfix"/>
                </div>
                <Copyright />
            </div>
        );
    }
});

export  default Code;
