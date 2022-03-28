import { BiRightArrowAlt } from 'react-icons/bi';
import styled from 'styled-components';

export const StyledInfoCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 5fr;
  background-color: white;
  width: 100%;
  height: ${props => !props.isDetail && '300px'};
  padding: 70px;
  margin-top: 5px;
  margin-bottom: 20px;
  @media (max-width: 1224px) {
    grid-template-columns: 80px 1px auto;
    padding: 30px;
    padding-right: 10px;
    height: 100%;
  }
`;

export const StyledInfoCardEmoji = styled.div`
  height: 50px;
  font-size: 140px;
  margin-top: -50px;
  @media (max-width: 1224px) {
    margin-top: 0px;
    font-size: 70px;
  }
`;

export const StyledInfoCardContour = styled.div`
  border-right: 1.5px solid #b6b6b6a4;
  height: 50px;
  margin-top: 30px;
  @media (max-width: 1224px) {
    height: 70px;
  }
`;

export const StyledInfoDetailContainer = styled.div`
  margin-left: 40px;
  display: grid;
  gap: 20px;
  @media (max-width: 1224px) {
    margin-left: 20px;
    gap: 10px;
  }
`;

export const StyledInfoDetailName = styled.div`
  font-size: 32px;
  font-family: 'NexonBo';
  @media (max-width: 1224px) {
    margin-top: 20px;
    font-size: 22px;
  }
`;

export const StyledInfoDetailText = styled.div`
  @media (max-width: 1224px) {
    margin-top: -10px;
    font-size: 12px;
  }
`;

export const StyledInfoBottomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1224px) {
    grid-template-columns: auto;
  }
`;

export const StyledInfoBottom = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;
  @media (max-width: 1224px) {
    font-size: 10px;
    margin-left: -100px;
    gap: 0px;
  }
`;

export const StyledInfoLink = styled.a`
  margin-left: 10px;
  margin-top: 4px;
  color: #1890ff;
`;

export const StyledInfoEmail = styled.div`
  margin-left: 10px;
  margin-top: 4px;
`;

export const StyledDetailCommentBox = styled.div`
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 23px;
  overflow: hidden;
  word-break: break-all;
  @media (max-width: 1224px) {
    margin-left: -100px;
  }
`;

export const StyledArrowContainer = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  @media (max-width: 1224px) {
    grid-template-columns: auto 60px;
  }
`;

export const StyledArrowTextContainer = styled.div`
  @media (max-width: 1224px) {
    display: grid;
    gap: 10px;
  }
`;

export const StyledArrow = styled(BiRightArrowAlt)`
  cursor: pointer;
  margin-top: 40px;
  @media (max-width: 1224px) {
    margin-top: 25px;
  }
`;
