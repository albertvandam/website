import React from 'react';

export default function (props) {
    let className = 'copyright';
    if (props.fixed) {
        className += ' fixed';
    }

    return (
        <div className={className}>&copy;{process.env.COPY_YEAR} Albert van Dam</div>
    );
}
