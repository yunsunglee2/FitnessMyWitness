import React from "react";
import styled from "styled-components";
import { Banner } from "../banner";

const BannerLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.5;
  height: 100%;
  background-color: #892b64;
  padding: 1rem 1rem;
`;
const Text = styled.span`
  color: #fff;
  font-size: 4rem;
`;
const Footer = styled.div`
  display: flex;
  flex-shrink: 0;
  color: #fff;
  font-size: 3rem;
  margin-top: 1.5rem;
  margin-top: 1.5rem;
`

export const Header = () => {
  return (
    <BannerLayout>
      <header className="logo">
        <Text>F&W</Text>
      </header>
      <Banner/>
      <Footer><span>Hello LYS! <br/>Today is Your Day</span></Footer>
    </BannerLayout>
  );
};
