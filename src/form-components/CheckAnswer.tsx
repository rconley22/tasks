import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function getAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <>
            <div>
                <h3>Check Answer</h3>
                <Form.Group controlId="checkAnswer">
                    <Form.Label>Enter your answer:</Form.Label>
                    <Form.Control value={answer} onChange={getAnswer} />
                </Form.Group>
                {answer.trim() === expectedAnswer.trim() ? (
                    <div>✔️</div>
                ) : (
                    <div>❌</div>
                )}
            </div>
        </>
    );
}
