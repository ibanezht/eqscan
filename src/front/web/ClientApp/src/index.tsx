import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import getRootStore from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Provider} from "react-redux";
import theme from "./theme";
import {ThemeProvider} from "@material-ui/styles";

export const store = getRootStore();

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);
