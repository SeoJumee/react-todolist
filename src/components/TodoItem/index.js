import React from 'react';
import * as S from './style';
import { MdDone, MdDelete } from 'react-icons/md';

function TodoItem({ id, done, text }) {
  return (
    <S.TodoItemBlock>
      <S.CheckCircle done={done}>{done && <MdDone />}</S.CheckCircle>
      <S.Text done={done}>{text}</S.Text>
      <S.Remove>
        <MdDelete />
      </S.Remove>
    </S.TodoItemBlock>
  );
}

export default TodoItem;
