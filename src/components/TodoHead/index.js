import React from 'react';
import * as S from './style';

function TodoHead() {
  return (
    <S.TodoHeadBlock>
      <h1>2019년 7월 10일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </S.TodoHeadBlock>
  );
}

export default TodoHead;
