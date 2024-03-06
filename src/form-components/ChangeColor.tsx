import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "white",
        "black",
        "grey"
    ];
    const [chosenColor, setChosenColor] = useState<string>(colors[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        inline
                        label={color}
                        type="radio"
                        id="colored-box"
                        onChange={updateColor}
                        key={color}
                        checked={color === chosenColor}
                        style={{ backgroundColor: color }}
                        value={color}
                    />
                ))}
            </Form>
            <div style={{ display: "inline-flex" }}>You have chosen: </div>
            <div
                data-testid={"colored-box"}
                style={{ display: "inline-flex", backgroundColor: chosenColor }}
            >
                {" " + chosenColor}
            </div>
        </div>
    );
}
