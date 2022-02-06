import styled from 'styled-components';

export const StyledUserInfoTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: 5%;
  @media (max-width: 1224px) {
    margin-left: 20px;
  }
`;

export const StyledUserInfoTopTitle = styled.div`
  font-size: 26px;
  font-family: 'NexonBo';
  @media (max-width: 1224px) {
    font-size: 20px;
  }
`;

export const StyledUserInfoModalText = styled.div``;
export const StyledUserInfoModalEmoji = styled.div`
  font-size: 80px;
  cursor: pointer;
`;
