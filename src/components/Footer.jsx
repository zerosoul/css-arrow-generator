import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';

const Container = styled.footer`
  padding: 0.8rem;
  font-size: 0.8rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  border-top: 1px solid #797f85;
  border-top-color: rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.2);
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${media.desktop} {
    flex-direction: row;
    justify-content: center;
  }
  > span {
    margin: 0 0.8rem;
    a {
      color: #fff;
    }
  }
`;
const Footer = () => (
  <Container>
    <span>
      <a href="/">HOME</a>
    </span>
    <span>
      By <a href="//blog.yangerxiao.com">Tristan Yang</a> © 2018
    </span>
    <span>
      <a rel="noopener noreferrer" target="_blank" href="http://www.beian.miit.gov.cn/">
        京ICP备16015459号-1
      </a>
    </span>
    <span>
      Checkout the source on <a href="//github.com/zerosoul/css-arrow-generator">Github</a>
    </span>
  </Container>
);
export default Footer;
