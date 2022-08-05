import React from 'react';
import PropTypes from 'prop-types';

export const HomeIcon = ({ fill }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
            <path id="home" fill={fill} d="M11.386,1.211a1,1,0,0,1,1.228,0l9,7A1,1,0,0,1,22,9V20a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9a1,1,0,0,1,.386-.789ZM10,21h4V13H10Zm6,0V12a1,1,0,0,0-1-1H9a1,1,0,0,0-1,1v9H5a1,1,0,0,1-1-1V9.489l8-6.222,8,6.222V20a1,1,0,0,1-1,1Z" transform="translate(-2 -1)" />
        </svg>
    )
}

HomeIcon.propTypes = {
    fill: PropTypes.string,
};

