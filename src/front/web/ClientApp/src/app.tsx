import {createBrowserHistory} from "history";
import React, {FC} from "react";
import {Router} from "react-router";
import Routes from "./routes";

const history = createBrowserHistory();

const App: FC = () => {
    return (
        <Router history={history}>
            <Routes/>
        </Router>
    );
};

export default App;
