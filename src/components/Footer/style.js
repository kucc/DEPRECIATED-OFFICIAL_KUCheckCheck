import styled from 'styled-components';

export const StyledFooterContainer = styled.div`
  padding: ${props => (props.isMobile ? '30px 10.7%' : '50px 19%')};
  padding-top: ${props => (props.isMobile ? '30px' : '100px')};
  background-color: rgb(245, 245, 245);
`;

export const StyledFooterBox = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const StyledFooterTitle = styled.div`
  font-family: 'NexonBo';
  font-size: ${props => (props.isMobile ? '9px' : '14px')};
  width: ${props => (props.isMobile ? '70px' : '200px')};
`;

export const StyledFooterDesc = styled.div`
  font-size: ${props => (props.isMobile ? '7px' : '12px')};
`;

export const StyledFooterLink = styled.a`
  font-size: ${props => (props.isMobile ? '7px' : '12px')};
  text-decoration: none;
  color: black;
`;

export const StyledFooterVerticalLine = styled.div`
  height: 25px;
  border-right: 1px solid #b6b6b677;
  margin-left: 20px;
  margin-right: 20px;
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
