import React from 'react';
import * as S from './style';

function TodoTemplate({ children }) {
  return <S.TodoTemplateBlock>{children}</S.TodoTemplateBlock>;
}

export default TodoTemplate;
