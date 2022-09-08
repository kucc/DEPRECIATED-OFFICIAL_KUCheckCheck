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
  @media (max-width: 600px) {
    min-width: 100%;
    padding: 0px 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
`;
