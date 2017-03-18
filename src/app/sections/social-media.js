/* globals: IMAGE_URL: false */

import React from 'react';
import {Link} from 'react-router-dom';
import siteConfig from '../../config/global';

export default function () {
    return (
        <div className="socialMedia">
            <Link to="/contact"><i className="material-icons email">email</i></Link>

            <a rel="noopener" href={siteConfig.linkedin} target="_blank"> <img
                src={IMAGE_URL + '/linkedin.svg'} alt="LinkedIn" width={18} height={18}/> </a>

            <a rel="noopener" href={siteConfig.github} target="_blank"> <img
                src={IMAGE_URL + '/github-box.svg'} alt="GitHub" width={18} height={18}/> </a>
        </div>
    );
}
