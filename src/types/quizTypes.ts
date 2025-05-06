export type AnswerOption = {
    answer: string;
    isCorrect: boolean;
};

export type Question = {
    question: string;
    answers: AnswerOption[];
};
