import React from 'react';
import TitleStyles from '../css/TitleStyles.module.css';

function Title ( { pageTitle } ) {
    return (
        <div className={TitleStyles.title}>
            <label className={TitleStyles.Caption}>{pageTitle}</label>
        </div>
    )
}

export default Title
