/* globals IMAGE_URL: false */
import React from 'react';

'use strict';

export default function () {
    return (
        <div className="infoImage">
            <div className="profileVideoContainer">
                <img src={IMAGE_URL + '/frustrated.jpg'} alt="Frustrated" className="profileVideo infoPic"/>
            </div>
        </div>
    );
};
