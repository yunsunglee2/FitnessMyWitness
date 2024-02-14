import React from "react";
import styled from "styled-components";
import { Main } from "../main";
import { Header } from "../header";

const LandingPageLayout = styled.div`
  display: flex;
  height: 100vh;
`;

export const LandingPage = () => {
  return (
    <LandingPageLayout>
      <Header />
      <Main />
    </LandingPageLayout>
  );
};
