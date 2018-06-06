import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../styledComponents/theme';
import logo from '../assets/images/logo.svg';
import aboutBg from '../assets/images/about_bg.jpg';

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -75px 0 0 -40px;
`;

const OpenButton = styled.a`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #333333;
  color: #E62047;
  border-radius: 20px;
  font-size: 16px;
  left: 50%;
  bottom: 10%;
  margin-left: -15px;
  padding: 3px 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const AboutWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
`;

const AboutBgWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  background-image: url('${aboutBg}');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  animation-name: fadein;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
`;

const ContentColumn = styled.div`
  width: 25%;
  min-width: 400px;
  height: 100%;
  left: -100%;
  padding: 30px;
  font-size: 20px;
  position: absolute;
  background: white;
  animation-name: about-column-slidein;
  animation-duration: 0.6s;
  animation-delay: 0s;
  opacity: 0.7;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;

  &:after {
    content: " ";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: white;
    transform-origin: bottom left;
    -ms-transform: skew(-7deg, 0deg);
    -webkit-transform: skew(-7deg, 0deg);
    transform: skew(-7deg, 0deg);
  }
`;

const ColumnDecoration = styled.div`
  opacity: 0.5;
  width: 27%;
  left: -100%;
  min-width: 450px;
  height: 100%;
  padding: 30px;
  font-size: 20px;
  position: absolute;
  background: white;
  animation-name: about-column-decoration-slidein;
  animation-duration: 0.3s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;

  &:after {
    content: " ";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 25%;
    background: white;
    transform-origin: bottom left;
    -ms-transform: skew(7deg, 0deg);
    -webkit-transform: skew(7deg, 0deg);
    transform: skew(7deg, 0deg);
  }
`;


export default class IndexPage extends Component {
  state = {
    showCV: false,
  }

  render() {
    const { showCV } = this.state;
    return (
      <Wrapper>
        <Logo src={logo} width="80" height="150" alt="RockingElevator"/>
        <OpenButton onClick={() => this.setState({showCV: true})}>
          <i className="icon-right-open" />
        </OpenButton>
        {showCV &&
          <AboutWrapper>
            <AboutBgWrapper />
            <ColumnDecoration />
            <ContentColumn />
          </AboutWrapper>
        }
      </Wrapper>
    );
  }
}
