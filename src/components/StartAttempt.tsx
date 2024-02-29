import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function increaseAttempt(): void {
        setAttempts(attempts + 1);
    }
    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    function stopQuiz(): void {
        setProgress(false);
    }

    return (
        <div>
            <p>Attempts: {attempts}</p>
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={increaseAttempt} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
