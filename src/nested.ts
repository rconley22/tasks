import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const new_arr = questions.filter(
        (value: Question): boolean => value.published
    );
    return new_arr;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const new_arr = questions.filter(
        (value: Question): boolean =>
            value.body.length > 0 ||
            value.expected.length > 0 ||
            value.options.length > 0
    );
    return new_arr;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const num = questions.find((val) => val.id === id) || null;
    return num;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const new_ques = questions.filter(
        (val: Question): boolean => val.id !== id
    );
    return new_ques;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const new_arr = questions.map((val: Question): string => val.name);
    return new_arr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (tot: number, val: Question) => tot + val.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (tot: number, val: Question) =>
            val.published ? tot + val.points : tot,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let new_str = "id,name,options,points,published\n";
    new_str += questions
        .map((val: Question): string => {
            const optionsCount = val.options.length;
            return `${val.id},${val.name},${optionsCount},${val.points},${val.published}`;
        })
        .join("\n");
    return new_str;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const new_arr: Answer[] = questions.map(
        (val: Question): Answer => ({
            questionId: val.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return new_arr;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const new_arr = questions.map((val: Question): Question => {
        return { ...val, published: true };
    });
    return new_arr;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const typ = questions[0].type;

    return questions.every((question) => question.type === typ);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const ques: Question = makeBlankQuestion(id, name, type);
    const new_arr = [...questions, ques];
    return new_arr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const new_arr = questions.map(
        (val: Question): Question =>
            val.id === targetId ? { ...val, name: newName } : val
    );
    return new_arr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const new_arr = questions.map((val: Question): Question => {
        if (val.id === targetId) {
            if (newQuestionType !== "multiple_choice_question") {
                return { ...val, type: newQuestionType, options: [] };
            } else {
                return { ...val, type: newQuestionType };
            }
        } else {
            return val;
        }
    });

    return new_arr;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((val) => {
        if (val.id === targetId) {
            const updatedOptions = [...val.options];

            if (targetOptionIndex === -1) {
                updatedOptions.push(newOption);
            } else if (
                targetOptionIndex >= 0 &&
                targetOptionIndex < updatedOptions.length
            ) {
                updatedOptions[targetOptionIndex] = newOption;
            }
            return { ...val, options: updatedOptions };
        }

        return val;
    });
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    return questions.flatMap((question: Question) =>
        question.id === targetId
            ? [question, duplicateQuestion(newId, question)]
            : [question]
    );
}
