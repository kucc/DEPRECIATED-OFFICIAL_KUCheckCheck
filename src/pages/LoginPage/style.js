import { Col, Row } from 'antd';
import styled from 'styled-components';

export const StyledRow = styled(Row)`
  background-color: #f5f5f5;
  height: 100vh;
`;

export const StyledCol = styled(Col)`
  background-color: white;
  height: 100vh;
  min-width: 600px;
  border-radius: 25px;
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
