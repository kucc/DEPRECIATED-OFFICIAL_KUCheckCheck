import TimelineItem from "antd/lib/timeline/TimelineItem";
import styled from "styled-components";

export const StyledBackground = styled.div`
  background-color: rgb(245, 245, 245);
`;

export const StyledNavBarContainer = styled.div`
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: 0 11px 10px 2px lightgrey;
  background-color: white;
`;

export const StyledMainContainer = styled.div`
  margin-left: 14.21%;
  margin-right: 14.21%;
`;

export const StyledCardContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  box-shadow: rgb(50 50 93 / 30%) 0px 13px 27px -5px,
    rgb(0 0 0 / 20%) 0px 8px 16px -8px;
  display: grid;
  grid-template-columns: 1fr 1px 5fr;
  padding: 70px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const StyledPictureContainer = styled.div`
  height: 50px;
  font-size: 170px;
  margin-top: -70px;
`;

export const StyledDetailContainer = styled.div`
  margin-left: 40px;
  display: grid;
  grid-template-rows: 1fr 0.7fr 3fr 1fr;
`;

export const StyledDetailCommentBox = styled.div`
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 23px;
`;

export const StyledIconContainer = styled.div`
  background-color: black;
  width: 27px;
  height: 27px;
  display: grid;
  place-items: center;
  border-radius: 50%;
`;

export const StyledTimelineItem = styled(TimelineItem)`
  .ant-timeline-item-content {
    margin-top: -70px;
    margin-bottom: 70px;
  }
`;
