import React from "react";
import PSessionMainCont from "./PSessionMainCont";

export default function SessionMainCont({
  category,
  id,
  // title,
  // explain,
  // goal,
  // difficulty,
  // credit,
  // progress,
  // notice,
}) {
  const {
    title,
    level,
    credit,
    intro,
    goal,
    day,
    people,
    placeHow,
    remember,
    check,
  } = {
    title: "바닐라 자바스크립트",
    level: "초급",
    credit: "1",
    intro: "리액트 이용해 페이지 만드는 법을 배울 예정",
    goal: "익숙해지는 것이 우선이라 생각",
    day: "수요일 4시이후",
    people: "6-8명",
    placeHow: "3,4월 가벼운 난이도의 과제가 있을예정",
    remember: "해당시간에 배운내용을 뭐시기",
    check: true,
  };
  return (
    <>
      <PSessionMainCont
        title={title}
        level={level}
        credit={credit}
        intro={intro}
        goal={goal}
        day={day}
        people={people}
        placeHow={placeHow}
        remember={remember}
        check={check}
        category={category}
        id={id}
      />
    </>
  );
}
