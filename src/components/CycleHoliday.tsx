import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays: string[] = ["🎄", "🕺", "🐇", "🎇", "🦞"];
    const [holiday, setHoliday] = useState<string>(holidays[0]);

    function nextAlphabetically(): void {
        const alpha: string[] = ["🎄", "🐇", "🦞", "🕺", "🎇"];
        const currIndex = alpha.indexOf(holiday);
        if (currIndex === -1) {
            setHoliday(alpha[0]);
        } else {
            const nextIndex = (currIndex + 1) % alpha.length;
            setHoliday(alpha[nextIndex]);
        }
    }
    function nextInYear(): void {
        const currIndex = holidays.indexOf(holiday);
        if (currIndex === -1) {
            setHoliday(holidays[0]);
        } else {
            const nextIndex = (currIndex + 1) % holidays.length;
            setHoliday(holidays[nextIndex]);
        }
    }
    return (
        <div>
            <Button onClick={nextAlphabetically}>Advance by alphabet</Button>;
            <Button onClick={nextInYear}>Advance by year</Button>;
            <p>Holiday: {holiday}</p>
        </div>
    );
}
