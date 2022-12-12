import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from "@material-ui/core";

// fix for the google authentication and authorization
import { gapi } from 'gapi-script';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import Auth from "./components/Auth/Auth";

gapi.load("client:auth2", () => {
    gapi.client.init({
        clientId:
        "*****.apps.googleusercontent.com",
        plugin_name: "chat",

    });
});

const App = () => (
    <BrowserRouter>
        <Container maxwidth='lg'>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home /> } />
                <Route path="/auth" exact element={<Auth />} />
            </Routes>
        </Container>
    </BrowserRouter>
);
export default App;    