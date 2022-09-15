import styled from 'styled-components';

export const StyledInfoContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.isEdit ? 'auto' : 'auto 30%')};
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const StyledInfoStack = styled.div`
  border-left: 1px solid #b6b6b6;
  margin-top: 80px;
  padding: 50px;
  padding-top: 10px;
  padding-right: 0px;
  @media (max-width: 1224px) {
    margin-top: 0px;
    border-left: none;
    padding: 0px;
  }
`;

export const StyledStackPrimary = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  margin-top: 30px;
  @media (max-width: 1224px) {
    margin-top: 0px;
  }
`;

export const StyledStackDetail = styled.div`
  margin-top: 30px;
  @media (max-width: 1224px) {
    display: grid;
    grid-template-columns: 45% 55%;
    margin-top: 0px;
  }
`;

export const StyledStackDetailText = styled.div`
  font-size: 15px;
  @media (max-width: 1224px) {
    font-size: 12px;
  }
`;

export const StyledInfoDetail = styled.div`
  padding-right: 20px;
`;

export const StyledInfoText = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 130px auto;
  gap: 20px;
  margin-left: 20px;
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
  font-size: 16px;
  @media (max-width: 1224px) {
    font-size: 12px;
    word-break: break-word;
  }
`;
