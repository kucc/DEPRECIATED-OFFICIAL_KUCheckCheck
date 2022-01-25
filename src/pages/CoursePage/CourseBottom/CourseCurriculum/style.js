import { Timeline } from 'antd';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 80px;
`;

export const StyledTimeline = styled(Timeline)`
  .ant-timeline-item-left {
    line-height: 4;
  }

  .ant-timeline-item-label {
    width: 181px !important;
    font-family: 'NexonBo';
    font-size: 20px;
  }

  .ant-timeline-item-content {
    left: 200px !important;
    top: 3px;
    width: calc(100% - 300px) !important;
  }

  .ant-timeline-item-head {
    left: 200px !important;
    top: 25px;
  }

  .ant-timeline-item-tail {
    left: 200px !important;
    top: 35px;
  }
`;
