import React, { useState } from "react";
import CardWrapper from "../common/Card";

function getUserFromLocalStorage() {
    return localStorage.getItem("user");
}

export const withAuth = (SimpleComponent) => () => {
    const [isAuth, setIsAuth] = useState(getUserFromLocalStorage());
    const handleLogin = () => {
        localStorage.setItem("user", "user");
        setIsAuth(getUserFromLocalStorage());
    };
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuth(null);
    };
    return (
        <CardWrapper>
            <SimpleComponent
                onLogin={handleLogin}
                onLogOut={handleLogout}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};
