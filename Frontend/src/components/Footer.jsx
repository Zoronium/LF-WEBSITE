import React from "react";
import styled from "styled-components";

const Footer = () => {
  const FooterWrapper = styled.div`
    height: 100px;
    background: #175CE6
;
    height: 200px;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    color: white;
  `;

  const LinksFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  `;
  const Sublink = styled.a`
    
    cursor: pointer;
  `;

  const MediaFooter = styled.div`
  border: 5px;
  border-color: black;
  display: grid;
  `;
  const LinksHeader = styled.h3`
    cursor: pointer;
  `;

  return (
    <div>
      <FooterWrapper>
        <MediaFooter>
          <p>txt</p>
          <p>txt</p>
          <p>txt</p>
        </MediaFooter>
        <LinksFooter>
          <LinksHeader>link</LinksHeader>
          <Sublink>link 1</Sublink>
          <Sublink>link 1</Sublink>
          <Sublink>link 1</Sublink>
          <Sublink>link 1</Sublink>
        </LinksFooter>
        <LinksFooter>
          <LinksHeader>link</LinksHeader>
          <Sublink>link 1</Sublink>
          <Sublink>link 1</Sublink>
          <Sublink>link 1</Sublink>
          <Sublink>link 1</Sublink>
          <Sublink>link 1</Sublink>
        </LinksFooter>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
