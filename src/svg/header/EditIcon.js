import React from 'react';
import PropTypes from 'prop-types';

export const EditIcon = ({ fill }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14">
            <path id="edit-3" fill={fill} d="M14,3.343a.852.852,0,0,0-.595.24L4.177,12.592l-.4,1.548,1.586-.387,9.228-9.009a.821.821,0,0,0,.182-.266.8.8,0,0,0,0-.628.821.821,0,0,0-.182-.266.842.842,0,0,0-.273-.178A.859.859,0,0,0,14,3.343Zm-1.655-.795a2.385,2.385,0,0,1,2.551-.5,2.345,2.345,0,0,1,.759.5,2.281,2.281,0,0,1,.507.741,2.235,2.235,0,0,1,0,1.749,2.281,2.281,0,0,1-.507.741L6.28,14.932a.755.755,0,0,1-.348.193l-3,.732a.762.762,0,0,1-.712-.193.721.721,0,0,1-.2-.7l.75-2.929a.728.728,0,0,1,.2-.34ZM8.75,15.146a.741.741,0,0,1,.75-.732h6.75a.732.732,0,1,1,0,1.464H9.5A.741.741,0,0,1,8.75,15.146Z" transform="translate(-2 -1.879)" fillRule="evenodd" />
        </svg>
    )
}

EditIcon.propTypes = {
    fill: PropTypes.string,
};
