import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label className="form-label">
                Email:
                <input ref={inputRef} type="email" className="form-control" />
            </label>
            <button className="btn btn-primary mx-1" onClick={handleClick}>
                Button
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClickWidth}>
                Size
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
