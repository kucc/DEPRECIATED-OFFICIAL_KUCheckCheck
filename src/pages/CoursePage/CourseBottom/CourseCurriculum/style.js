import { Timeline } from 'antd';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-top: 80px;
`;

export const StyledTimeline = styled(Timeline)`
  .ant-timeline-item-left {
    line-height: 4;
    @media (max-width: 1224px) {
      line-height: 2;
    }
  }

  .ant-timeline-item-label {
    width: 181px !important;
    font-family: 'NexonBo';
    font-size: 20px;
    @media (max-width: 1224px) {
      width: 51px !important;
      font-size: 12px;
    }
  }

  .ant-timeline-item-content {
    left: 200px !important;
    top: 3px;
    width: calc(100% - 300px) !important;
    @media (max-width: 1224px) {
      left: 70px !important;
      top: -7px;
      width: calc(100% - 90px) !important;
      font-size: 12px;
    }
  }

  .ant-timeline-item-head {
    left: 200px !important;
    top: 25px;
    @media (max-width: 1224px) {
      left: 70px !important;
      top: 0px;
    }
  }

  .ant-timeline-item-tail {
    left: 200px !important;
    top: 35px;
    @media (max-width: 1224px) {
      left: 70px !important;
      top: 10px;
    }
  }
`;
