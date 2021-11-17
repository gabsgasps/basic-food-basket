import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import Home from "./Home/Home";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
