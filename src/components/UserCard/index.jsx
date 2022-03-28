import React from 'react';

import PropTypes from 'prop-types';
import { FiPaperclip } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import { BlackIcon } from '@components';

import useWindowDimensions from '@hooks/useWindowDimensions';

import {
  StyledArrow,
  StyledArrowContainer,
  StyledArrowTextContainer,
  StyledDetailCommentBox,
  StyledInfoBottom,
  StyledInfoBottomContainer,
  StyledInfoCardContainer,
  StyledInfoCardContour,
  StyledInfoCardEmoji,
  StyledInfoDetailContainer,
  StyledInfoDetailName,
  StyledInfoDetailText,
  StyledInfoEmail,
  StyledInfoLink,
} from './style';

export const UserCard = ({
  isDetail,
  emoji,
  name,
  comment,
  detailComment,
  link,
  email,
  userId,
}) => {
  const history = useHistory();
  const goToUserpage = () => {
    history.push(`/userpage/${userId}`);
  };
  const { width } = useWindowDimensions();
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <StyledInfoCardContainer
      className='out-shadow-strong border-radius-all'
      isDetail={isDetail}>
      <StyledInfoCardEmoji screenWidth={width}>{emoji}</StyledInfoCardEmoji>
      <StyledInfoCardContour />
      <StyledInfoDetailContainer>
        {!isDetail ? (
          <StyledArrowContainer>
            <StyledArrowTextContainer>
              <StyledInfoDetailName>{name}</StyledInfoDetailName>
              <StyledInfoDetailText>{comment}</StyledInfoDetailText>
            </StyledArrowTextContainer>
            <StyledArrow
              onClick={goToUserpage}
              color='black'
              size={isMobile ? 40 : 60}
            />
          </StyledArrowContainer>
        ) : (
          <>
            <StyledInfoDetailName>{name}</StyledInfoDetailName>
            <StyledInfoDetailText>{comment}</StyledInfoDetailText>
          </>
        )}
        {isDetail && (
          <>
            <StyledDetailCommentBox>{detailComment}</StyledDetailCommentBox>
            <StyledInfoBottomContainer>
              <StyledInfoBottom>
                <BlackIcon IconComponent={<FiPaperclip color='white' />} />
                <StyledInfoLink href={link} target='_blank'>
                  {link}
                </StyledInfoLink>
              </StyledInfoBottom>
              <StyledInfoBottom>
                <BlackIcon IconComponent={<HiOutlineMail color='white' />} />
                <StyledInfoEmail>{email}</StyledInfoEmail>
              </StyledInfoBottom>
            </StyledInfoBottomContainer>
          </>
        )}
      </StyledInfoDetailContainer>
    </StyledInfoCardContainer>
  );
};

UserCard.propTypes = {
  isDetail: PropTypes.bool,
  emoji: PropTypes.string,
  name: PropTypes.string,
  comment: PropTypes.string,
  detailComment: PropTypes.string,
  link: PropTypes.string,
  email: PropTypes.string,
  userId: PropTypes.string,
};
