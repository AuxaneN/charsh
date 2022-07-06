import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/defaultTheme";
import { userStore } from "./stores/userStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import Messages from "./components/Messages/Messages";
import Characters from "./components/Characters/Characters";
import Character from "./components/Character/Character";
import Form from "./components/Form/Form";
const App = () => {
    let token;
    const setToken = userStore((state) => state.setToken);
    const localToken = localStorage.getItem("token");
    useEffect(() => {
        console.log("should be first");
        if (localToken) {
            setToken(localToken);
        }
        console.log("Apptsx fires once");
    }, []);
    token = userStore((state) => state.token);
    if (localToken) {
        axios.defaults.headers.common["Authorization"] = localToken;
    }
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.withCredentials = false;
    return (_jsx(ThemeProvider, Object.assign({ theme: defaultTheme }, { children: _jsxs("div", Object.assign({ className: "App" }, { children: [_jsx(Messages, {}), _jsxs(BrowserRouter, { children: [_jsx(Nav, { loggedIn: token ? true : false }), _jsx(Content, { children: _jsxs(_Fragment, { children: [_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/logout", element: _jsx(Logout, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/characters", element: _jsx(Characters, {}) }), _jsx(Route, { path: "/characters/:id", element: _jsx(Character, {}) }), _jsx(Route, { path: "/create-character", element: _jsx(Form, {}) })] }), _jsxs("p", Object.assign({ className: "credits" }, { children: ["Made with \uD83D\uDC96 by", " ", _jsx("a", Object.assign({ href: "https://twitter.com/casyus", target: "_blank", rel: "no-referrer no-opener" }, { children: "@casyus" }))] }))] }) })] })] })) })));
};
export default App;
//# sourceMappingURL=App.js.map