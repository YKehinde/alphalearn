import React from 'react'
import styled, { keyframes } from 'styled-components';

const shake =keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

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
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  position: relative;
  &.active {
    transform: scale(1.2);
    z-index: 1;
    animation-name: ${shake};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
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
    <Wrapper className={active ? 'active' : ''}>
      <Letter>
        {letter}
      </Letter>
    </Wrapper>
  )
}

export default Card;