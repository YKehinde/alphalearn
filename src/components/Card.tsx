import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 150px;
  height: 180px;
  border: 1px solid #000;
  margin: 10px;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  align-items: center;
  align-content: flex-start;
`;

const Letter = styled.h1`
  font-size: 100px;
  margin: 0;
`;

export interface ICardProps {
  letter: string;
  active: boolean;
}

const Card = ({letter, active}: ICardProps) => {
  return (
    <Wrapper>
      <Letter>
        {letter}
      </Letter>
    </Wrapper>
  )
}

export default Card;