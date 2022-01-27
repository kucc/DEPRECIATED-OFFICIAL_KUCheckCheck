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
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  gap: 50px;
  flex-direction: column;
  align-items: center;
`;
