/* globals COPY_YEAR: false */
import React from 'react';
import siteConfig from '../../config/global';

export default function (props) {
    let className = 'copyright';
    if (props.fixed) {
        className += ' fixed';
    }

    return (
        <div className={className}>&copy;{COPY_YEAR} {siteConfig.title}</div>
    );
}
