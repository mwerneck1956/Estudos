import React, { Fragment, useState } from "react";

import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from './styles/themes/dark'
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import usePersistedState from './utils/usePersistedState'
function App() {
  const [theme, setTheme] = usePersistedState('theme' , light);

  const toggleTheme = () => {
    setTheme(theme.title  === 'light' ? dark : light)
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Header toggleTheme = {toggleTheme} />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
