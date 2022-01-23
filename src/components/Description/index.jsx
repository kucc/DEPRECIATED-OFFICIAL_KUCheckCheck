import React from 'react';

import { Typography } from 'antd';
import { useHistory } from 'react-router-dom';

import { DescriptionForm, DescriptionLogo } from './style';

const { Title, Text } = Typography;

export const Description = () => {
  const history = useHistory();
  return (
    <DescriptionForm>
      <DescriptionLogo
        alt='KUCC Icon'
        src={
          'https://user-images.githubusercontent.com/41494099/86317182-c58a8900-bc69-11ea-9a6e-dfdb1e0141be.png'
        }
        onClick={() => history.push('/')}
      />
      <Title>
        KUCC
        <br />
        길라잡이
      </Title>
      <Text>
        고려대학교 중앙 컴퓨터 동아리
        <br />
        세션/스터디 관리 시스템
      </Text>
    </DescriptionForm>
  );
};
