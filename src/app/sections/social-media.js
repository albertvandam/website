import React from 'react';

const IMAGE_URL = process.env.IMAGE_URL;

export default function () {
    return (
        <div className="socialMedia">
            <a href="#contact"><i className="material-icons email">email</i></a>

            <a rel="noopener" href="https://www.linkedin.com/in/avandamza/" target="_blank">
                <img src={IMAGE_URL + '/linkedin.svg'} alt="LinkedIn" width={18} height={18}/>
            </a>

            <a rel="noopener" href="https://github.com/albertvandam?tab=repositories" target="_blank">
                <img  src={IMAGE_URL + '/github-box.svg'} alt="GitHub" width={18} height={18}/>
            </a>
        </div>
    );
}
