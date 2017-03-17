import React from 'react';
import {Link} from 'react-router';

const IMAGE_URL = process.env.IMAGE_URL;

export default function () {
    return (
        <div className="socialMedia">
            <Link to="/contact"><i className="material-icons email">email</i></Link>

            <a rel="noopener" href="https://www.linkedin.com/in/avandamza/" target="_blank"> <img
                src={IMAGE_URL + '/linkedin.svg'} alt="LinkedIn" width={18} height={18}/> </a>

            <a rel="noopener" href="https://github.com/albertvandam?tab=repositories" target="_blank"> <img
                src={IMAGE_URL + '/github-box.svg'} alt="GitHub" width={18} height={18}/> </a>
        </div>
    );
}
