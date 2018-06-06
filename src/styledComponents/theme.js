import styled from 'styled-components';
import gif from '../assets/images/re_83.gif';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #E62047;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('${ gif }');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
