import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateWithoutCallback = (data) => {
        console.log(data);
    };

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    // without callback
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);
    // with callback
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutCallback: {withoutCallback.current} </p>
            <p>Render withCallback: {withCallback.current} </p>
            <label className="form-label">
                Email:
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="form-control"
                    value={data.email || ""}
                />
            </label>
        </CardWrapper>
    );
};

export default UseCallBackExample;
