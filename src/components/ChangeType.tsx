import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const types: QuestionType[] = [
        "short_answer_question",
        "multiple_choice_question"
    ];
    const [type, setType] = useState<QuestionType>(types[0]);

    function setTyp(): void {
        const newType =
            type === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question";
        setType(newType);
    }

    return (
        <div>
            <Button onClick={setTyp}>Change Type</Button>
            {(type === "multiple_choice_question" && (
                <div>Multiple choice</div>
            )) ||
                (type === "short_answer_question" && <div>Short answer</div>)}
        </div>
    );
}
