import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const initialValue = {
        text: "Блок",
        height: "40px",
        width: "60px",
        color: "#fff",
        resize: false
    };
    const [blockState, setBlockState] = useState(initialValue);
    const handleClick = () => {
        setBlockState((prevState) =>
            prevState.resize === false
                ? {
                      text: "text",
                      height: "150px",
                      width: "80px",
                      color: "#f3f2f0",
                      resize: true
                  }
                : initialValue
        );
    };

    useEffect(() => {
        blockRef.current.textContent = blockState.text;
        blockRef.current.style = `height: ${blockState.height}; width: ${blockState.width}; color: ${blockState.color}`;
    }, [blockState]);

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
            >
                <small></small>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleClick}>
                Change block
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
