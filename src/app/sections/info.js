import React from 'react';

'use strict';

export default function (props) {
    return (
        <div id="info" className="homeAboutContainer clearfix">
            <div className="homeAbout">
                <h3>{props.content.catchPhrase}</h3>

                {props.content.info.map((paragraph, index) => {
                    return (
                        <p key={index}>{paragraph}</p>
                    );
                })}
                <p>Read <a className="normal" href="https://medium.freecodecamp.com/nobody-wants-to-use-software-a75643bee654#.lqu5z4ia3" target="_blank" rel="noopener">Nobody wants to use software</a> by <i>Bertil
                                                                                                                                                                                             Muth</i>.</p>
            </div>
        </div>
    );
};
