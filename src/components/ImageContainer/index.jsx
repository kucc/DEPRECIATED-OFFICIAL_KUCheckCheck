import React from 'react';

import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

import { StyledLaguageImg } from '@utility/COMMON_STYLE';

export function ImageContainer({ courseName }) {
  return (
    <div>
      <Tooltip title={courseName}>
        <StyledLaguageImg
          style={{
            width: '55px',
            height: '55px',
            marginRight: '5px',
            marginBottom: '5px',
          }}
          src={`/img/icon/${courseName}.svg`}
        />
      </Tooltip>
    </div>
  );
}

ImageContainer.propTypes = {
  courseName: PropTypes.string,
};
