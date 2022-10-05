import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import {
  AuthInputWithLabel as Input,
  AuthTextAreaWithLabel as TextArea,
} from '@components/RenewalInputs';
import { RenewalSelect } from '@components/RenewalSelect';

import {
  StyledButton,
  StyledContainer,
  StyledContainerBody,
  StyledContainerHeader,
  StyledContainerSubTitle,
  StyledContainerTitle,
  StyledForm,
  StyledHeader,
  StyledLabel,
  StyledTitle,
} from './style';

interface IFormInput {
  type: number;
  difficulty: string;
  requireTime: number;
  title: string;
  language: string[];
  introduction: string;
  goal: string;
  progressDate: string;
  maxNumber: number;
  place: string;
  notice: string;
  detailStack: string[];
  curriculum: string[];
}

interface ActivityCategoryType {
  type?: number;
  difficulty?: string;
  requireTime?: number;
}

export const RenewalCourseCreatePage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [category, setCategory] = useState<ActivityCategoryType>({
    type: undefined,
    difficulty: undefined,
    requireTime: undefined,
  });
  const onSubmit: SubmitHandler<IFormInput> = inputData =>
    //TODO: 활동 개설 api 연동
    console.log({ ...inputData, ...category });

  const activities = ['세션', '스터디', '프로젝트'];
  const difficulties = ['easy', 'medium', 'hard'];
  const requireTimes = ['1학점', '2학점', '3학점'];
  const activityType: Record<string, number> = {
    세션: 1,
    스터디: 2,
    프로젝트: 3,
  };
  const requireTimeType: Record<string, number> = {
    '1학점': 1,
    '2학점': 2,
    '3학점': 3,
  };

  const handleActivity = (activity: typeof activities[number]) => {
    setCategory({
      ...category,
      type: activityType[activity],
    });
  };
  const handleDifficulty = (difficulty: string) => {
    setCategory({
      ...category,
      difficulty: difficulty,
    });
  };
  const handleRequireTime = (requireTime: typeof requireTimes[number]) => {
    setCategory({
      ...category,
      requireTime: requireTimeType[requireTime],
    });
  };

  const curriculumTextAreas = [...Array(8).keys()].map(key => (
    <TextArea
      inputName={`curriculum-${key + 1}`}
      labelTitle={`${key + 1}주차`}
      placeholder={'200자 이내로 작성해주세요.'}
      register={register}
      key={key}
    />
  ));

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledHeader>
        <StyledTitle>활동 개설</StyledTitle>
        <StyledButton>등록하기</StyledButton>
      </StyledHeader>
      <StyledContainer>
        <StyledContainerHeader>
          <StyledContainerTitle>필수 정보</StyledContainerTitle>
          <StyledContainerSubTitle>
            필수 정보는 <span className='warning'>수정이 불가</span>하니 신중히 입력해주세요!
          </StyledContainerSubTitle>
        </StyledContainerHeader>
        <StyledContainerBody>
          <StyledLabel>활동 카테고리</StyledLabel>
          <div style={{ display: 'flex', gap: 12 }}>
            <RenewalSelect
              items={activities}
              handleItem={handleActivity}
              placeholder='세션 / 스터디 / 프로젝트'
            />
            <RenewalSelect
              items={difficulties}
              handleItem={handleDifficulty}
              placeholder='난이도'
            />
            <RenewalSelect
              items={requireTimes}
              handleItem={handleRequireTime}
              placeholder='투자 시간'
            />
          </div>
          <Input
            inputName='title'
            labelTitle='활동 제목'
            placeholder={'30자 이내로 작성해주세요.'}
            register={register}
          />
          <Input
            inputName='language'
            labelTitle='주요 기술 스택 & 사용 언어'
            placeholder={'옵션을 선택해주세요.'}
            register={register}
          />
        </StyledContainerBody>
      </StyledContainer>
      <StyledContainer>
        <StyledContainerHeader>
          <StyledContainerTitle>세부 정보</StyledContainerTitle>
        </StyledContainerHeader>
        <StyledContainerBody>
          <Input
            inputName='detailStack'
            labelTitle='세부 기술 스택'
            placeholder={'옵션을 선택해주세요.'}
            register={register}
          />
          <TextArea
            inputName='introduction'
            labelTitle='활동 소개'
            placeholder={'200자 이내로 작성해주세요.'}
            register={register}
          />
          <TextArea
            inputName='goal'
            labelTitle='활동 목표'
            placeholder={'200자 이내로 작성해주세요.'}
            register={register}
          />
          <Input
            inputName='progressDate'
            labelTitle='진행 요일'
            placeholder={'100자 이내로 작성해주세요.'}
            register={register}
          />
          <TextArea
            inputName='place'
            labelTitle='진행 장소 및 방법'
            placeholder={'200자 이내로 작성해주세요.'}
            register={register}
          />
          <TextArea
            inputName='notice'
            labelTitle='유의 사항'
            placeholder={'200자 이내로 작성해주세요.'}
            register={register}
          />
        </StyledContainerBody>
      </StyledContainer>
      <StyledContainer>
        <StyledContainerHeader>
          <StyledContainerTitle>커리큘럼</StyledContainerTitle>
        </StyledContainerHeader>
        <StyledContainerBody>{curriculumTextAreas}</StyledContainerBody>
      </StyledContainer>
    </StyledForm>
  );
};
