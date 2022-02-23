import styled from 'styled-components';

export const StyledInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 230px;
`;

export const StyledInfoStack = styled.div`
  border-left: 1px solid #b6b6b6;
  margin-top: 80px;
`;

export const StyledInfoText = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 130px auto;
  gap: 20px;
  margin-left: 60px;
  align-items: center;
  @media (max-width: 1224px) {
    grid-template-columns: 50px auto;
    margin-left: 10px;
    margin-top: 50px;
  }
`;

export const StyledInfoTitle = styled.div`
  font-family: 'NexonBo';
  font-size: 20px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;
export const StyledInfoDesc = styled.div`
  font-size: 20px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;
