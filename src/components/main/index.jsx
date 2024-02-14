import React from "react";
import styled from "styled-components";

const MainLayout = styled.div`
  display: flex;
  flex-grow: 3;
  padding: 1rem 1rem;
  background-color: #2e6f95;
`;

export const Main = () => {
  return <MainLayout>main</MainLayout>;
};
