import React from 'react';

import PropTypes from 'prop-types';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FiPaperclip } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

import BlackIcon from '@components/BlackIcon';

import {
  StyledArrowContainer,
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

const UserCard = ({
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
  return (
    <StyledInfoCardContainer
      className='out-shadow-strong border-radius-all'
      isDetail={isDetail}>
      <StyledInfoCardEmoji>{emoji}</StyledInfoCardEmoji>
      <StyledInfoCardContour />
      <StyledInfoDetailContainer>
        {!isDetail ? (
          <StyledArrowContainer>
            <div>
              <StyledInfoDetailName>{name}</StyledInfoDetailName>
              <StyledInfoDetailText>{comment}</StyledInfoDetailText>
            </div>

            <BiRightArrowAlt
              onClick={goToUserpage}
              color='black'
              size={60}
              style={{ marginTop: '40px', cursor: 'pointer' }}
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
                <StyledInfoLink href={link}>{link}</StyledInfoLink>
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

export default UserCard;

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
