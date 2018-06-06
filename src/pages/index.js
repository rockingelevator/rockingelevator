import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../styledComponents/theme';
import logo from '../assets/images/logo.svg';
import logoElevator from '../assets/images/logo_elevator.svg';
import aboutBg from '../assets/images/about_bg.jpg';
import openButton from '../assets/images/btn_arrow_right.svg';

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -75px 0 0 -40px;
`;

const OpenButtonWrapper = styled.a`
  position: absolute;
  width: 30px;
  height: 30px;
  ${'' /* background-color: #333333;
  color: #E62047;
  border-radius: 20px;
  font-size: 16px;
  padding: 2px 5px; */}
  left: 50%;
  bottom: 10%;
  margin-left: -15px;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    padding: 4px 5px;
  }
`;

const OpenButton = styled.img`
  width: 30px;
  height: 30px;
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
  animation-duration: 0.7s;
  animation-delay: 0.3s;
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
  animation-duration: 0.4s;
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

const ContentWrapper = styled.div`
  opacity: 0;
  position: absolute;
  width: 25%;
  height: 100%;
  min-width: 400px;
  left: 0;
  padding: 40px;
  box-sizing: border-box;
  animation-name: about-column-content-slidein;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-fill-mode: forwards;

  @media (max-width: 480px) {
    padding: 30px;
    width: 100%;
    min-width: auto;
  }

  @media (max-width: 320px) {
    padding: 20px;
  }
`;

const LogoElevator = styled.img`
  width: 34px;
  height: 45px;
`;

const ButtonClose = styled.a`
  float: right;
  padding: 10px;
  font-size: 20px;
  margin-right: -10px;
`;

const ContactLinks = styled.ul`
  margin: 50px 0 0 -10px;
`;

const SocialLinks = styled.ul`
  margin: 20px 0 30px -10px;
`;

const SocialLinkItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 30px;
`;

const SocialLink = styled.a`
  font-size: 18px;
  padding: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

const ContactLink = styled.a`
  font-size: 16px;
  padding: 10px;
  color: #4282FF;

  &:hover {
    opacity: 0.7;
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
        <OpenButtonWrapper onClick={() => this.setState({showCV: true})}>
          <OpenButton src={openButton} />
        </OpenButtonWrapper>
        {showCV &&
          <AboutWrapper>
            <AboutBgWrapper />
            <ColumnDecoration />
            <ContentColumn />
            <ContentWrapper>
              <LogoElevator src={logoElevator}/>
              <ButtonClose onClick={() => this.setState({showCV:false})}>
                <i className="icon-close" />
              </ButtonClose>
              <h1>
                Kirill<br/><strong>Meshkov</strong>
              </h1>
              <p>
                <strong>2012 — 2018</strong><br />
                <span className="emoji" role="img">🤡</span> Chief Creative Officer at&nbsp;
                <a href="https://mediasapiens.de/" target="_blank" rel='noreferrer noopener'>Mediasapiens</a>
              </p>
              <p>
                <strong>2008 — 2011</strong><br />
                <span className="emoji" role="img">🤠</span> Lead UI/UX Designer at&nbsp;
                <a href="http://meta.ua/" target="_blank" rel='noreferrer noopener'>Meta Ukraine</a>
              </p>
              <ContactLinks>
                <SocialLinkItem>
                  <ContactLink href="mailto:rockingelevator@gmail.com">
                    <i className="icon-mail" />
                  </ContactLink>
                </SocialLinkItem>
                <SocialLinkItem>
                  <ContactLink href="https://t.me/rockingelevator">
                    <i className="icon-paper-plane" />
                  </ContactLink>
                </SocialLinkItem>
              </ContactLinks>
              <SocialLinks>
                <SocialLinkItem>
                  <SocialLink href="https://dribbble.com/rockingelevator">
                    <i className="icon-dribbble" />
                  </SocialLink>
                </SocialLinkItem>
                <SocialLinkItem>
                  <SocialLink href="https://twitter.com/moonk">
                    <i className="icon-twitter" />
                  </SocialLink>
                </SocialLinkItem>
                <SocialLinkItem>
                  <SocialLink href="http://rockingelevator.tumblr.com/">
                    <i className="icon-tumblr" />
                  </SocialLink>
                </SocialLinkItem>
                <SocialLinkItem>
                  <SocialLink href="https://www.linkedin.com/in/kirillmeshkov/">
                    <i className="icon-linkedin" />
                  </SocialLink>
                </SocialLinkItem>
              </SocialLinks>
            </ContentWrapper>
          </AboutWrapper>
        }
      </Wrapper>
    );
  }
}
