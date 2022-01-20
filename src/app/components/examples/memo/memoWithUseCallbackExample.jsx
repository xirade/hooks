import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Logout
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) return false;
    return true;
}

const MemoizedLogoutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = () => {
    const [state, setstate] = useState(false);
    const handleLogout = useCallback(() => {
        localStorage.removeItem("auth");
    }, []);

    return (
        <>
            <button
                className="btn btn-primary me-2"
                onClick={() => setstate(!state)}
            >
                Initiate rerender
            </button>
            <MemoizedLogoutButton onLogOut={handleLogout} />
        </>
    );
};

export default MemoWithUseCallbackExample;
