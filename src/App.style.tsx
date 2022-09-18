import styled from 'styled-components';
import background from './images/background.jpg';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('${background}');
  background-size: cover;
  background-attachment: fixed;
  padding: 0 0 20px;
`;

export const AppHeader = styled.header`
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
margin: 0 auto;
padding: 20px;
`;

export const TextInput = styled.input`
padding: 10px;
margin: 20px auto;
`;

export const CardWrapper  = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
`;