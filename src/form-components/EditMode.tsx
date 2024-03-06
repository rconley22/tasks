import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function UpdateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="set mode"
                label="Edit Mode"
                checked={editMode}
                onChange={UpdateMode}
            />
            <Form.Check
                type="checkbox"
                id="student status"
                label="Student"
                checked={isStudent}
                onChange={updateStudent}
                disabled={!editMode}
            />
            {editMode ? (
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={updateName}
                />
            ) : (
                <div>
                    {name} {isStudent ? "is a student" : "is not a student"}.
                </div>
            )}
        </div>
    );
}
