import { Col, Row } from 'antd';
import styled from 'styled-components';

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const StyledCol = styled(Col)`
  padding: 0px 100px;
  min-width: 600px;
  background-color: white;
  border-radius: 25px;
  @media (max-width: 1224px) {
    min-width: 0;
    padding: 0px 50px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 50px;
`;
