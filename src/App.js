import React from "react";
import Router from "./routes/routes";
import { ThemeProvider } from "styled-components";
import Header from "./components/layout/header";
import {theme} from './theme'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
    </ThemeProvider>
  );
};

export default App;
