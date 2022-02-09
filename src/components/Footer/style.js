import styled from 'styled-components';

export const StyledFooterContainer = styled.div`
  padding: 50px 19%;
  padding-top: 100px;
  background-color: rgb(245, 245, 245);
  @media (max-width: 1224px) {
    padding: 30px 7%;
    padding-top: 30px;
  }
`;

export const StyledFooterBox = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const StyledFooterTitle = styled.div`
  font-family: 'NexonBo';
  font-size: 14px;
  width: 200px;
  @media (max-width: 1224px) {
    font-size: 9px;
    width: 70px;
  }
`;

export const StyledFooterDesc = styled.div`
  font-size: 12px;
  @media (max-width: 1224px) {
    font-size: 7px;
  }
`;

export const StyledFooterLink = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: black;
  @media (max-width: 1224px) {
    font-size: 7px;
  }
`;

export const StyledFooterVerticalLine = styled.div`
  height: 25px;
  border-right: 1px solid #b6b6b677;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 1224px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const StyledHorizontalLine = styled.div`
  height: 1px;
  border-bottom: 1px solid #b6b6b677;
  margin-top: 8px;
  margin-bottom: 12px;
`;

export const StyledFooterImgBox = styled.div`
  display: grid;
  place-items: center;
`;

export const StyledFooterImg = styled.img`
  width: 124px;
  height: 124px;
  cursor: pointer;
`;
