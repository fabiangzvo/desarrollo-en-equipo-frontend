import React from "react";
import { ThemeProvider } from "styled-components";


import Theme from "@utils/Theme"

import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
