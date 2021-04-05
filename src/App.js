import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Routes from "./Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "8px",
        },
        "*::-webkit-scrollbar-track": {
          background: "#ddd",
        },
        "*::-webkit-scrollbar-thumb": {
          background: "#aaa",
          borderRadius: "8px",
          "&:hover": {
            background: "#999",
          },
        },
      },
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={themeLight}>
        <CssBaseline />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
