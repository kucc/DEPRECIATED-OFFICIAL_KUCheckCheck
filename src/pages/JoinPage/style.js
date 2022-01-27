import { Col, Row } from 'antd';
import styled from 'styled-components';

export const StyledRow = styled(Row)`
  background-color: #f5f5f5;
`;

export const StyledCol = styled(Col)`
  background-color: white;
  min-width: 600px;
  border-radius: 25px;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 50px;
`;
