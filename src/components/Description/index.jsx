import React from 'react';

import { Typography } from 'antd';
import { useHistory } from 'react-router-dom';

import { DefaultLogo } from '@components';

import { DescriptionForm } from './style';

const { Title, Text } = Typography;

export const Description = () => {
  const history = useHistory();
  return (
    <DescriptionForm>
      <DefaultLogo
        logoName='type-3-1'
        width={120}
        height={120}
        onClick={() => history.push('/')}
        isPointer={true}
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
