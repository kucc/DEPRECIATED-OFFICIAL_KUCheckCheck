import React from 'react';

import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { StyledLaguageImg } from '@utility';

export const ImageContainer = ({ courseName }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <div>
      <Tooltip title={courseName}>
        <StyledLaguageImg
          style={{
            width: isMobile ? '40px' : '55px',
            height: isMobile ? '40px' : '55px',
            marginRight: '5px',
            marginBottom: '5px',
          }}
          src={`/img/icon/${courseName}.svg`}
        />
      </Tooltip>
    </div>
  );
};

ImageContainer.propTypes = {
  courseName: PropTypes.string,
};
