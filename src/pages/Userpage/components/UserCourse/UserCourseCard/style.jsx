import TimelineItem from "antd/lib/timeline/TimelineItem";
import styled from "styled-components";

export const StyledTimelineItem = styled(TimelineItem)`
  .ant-timeline-item-content {
    margin-top: -70px;
    margin-bottom: 70px;
  }
`;

export const StyledCourseCardContainer = styled.div`
  margin-top: 80px;
`;

export const StyledCourseItemContainer = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
`;

export const StyledCourseSemester = styled.div`
  margin-top: -3px;
`;
