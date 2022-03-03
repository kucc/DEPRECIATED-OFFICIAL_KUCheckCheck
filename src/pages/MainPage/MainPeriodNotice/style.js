import styled from 'styled-components';

export const StyledPeriodContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

export const StyledPeriod = styled.div`
  display: flex;
  width: 450px;
  height: 50px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  @media (max-width: 1224px) {
    width: 300px;
    height: 50px;
    font-size: 11px;
  }
`;

export const StyledPeriodTitle = styled.span`
  font-family: 'NexonBo';
`;
