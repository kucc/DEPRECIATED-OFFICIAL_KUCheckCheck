import React from 'react';

import PropTypes from 'prop-types';

import { StyledIconContainer } from './style';

const BlackIcon = ({ IconComponent }) => {
  return <StyledIconContainer>{IconComponent}</StyledIconContainer>;
};

BlackIcon.propTypes = {
  IconComponent: PropTypes.object,
};

export default BlackIcon;
