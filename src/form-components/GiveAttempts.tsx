import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");

    function increaseAttempt(): void {
        const requestedAttempts = parseInt(requests);
        if (!isNaN(requestedAttempts)) {
            setAttemptsLeft(attemptsLeft + requestedAttempts);
            setRequests("");
        }
    }
    function decreaseAttempt(): void {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="attemptRequests">
                <Form.Label>Attempts requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequests(event.target.value)
                    }
                />
            </Form.Group>
            <p>Attempts left: {attemptsLeft}</p>
            <Button onClick={decreaseAttempt} disabled={attemptsLeft === 0}>
                use
            </Button>
            <Button onClick={increaseAttempt}>gain</Button>
        </div>
    );
}
