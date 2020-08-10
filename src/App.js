import React from "react";
import Home from "./pages/Home";
import "./App.css";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./utils/theme";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const theme = createMuiTheme(themeFile);

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <div className="App">
                    <Home />
                </div>
            </Provider>
        </MuiThemeProvider>
    );
}

export default App;
