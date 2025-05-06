import type { Question } from "../types/quizTypes";

export const quizQuestions: Question[] = [
    {
        question: "What is the capital of France?",
        answers: [
            { answer: "Paris", isCorrect: true },
            { answer: "London", isCorrect: false },
            { answer: "Berlin", isCorrect: false },
            { answer: "Madrid", isCorrect: false },
        ],
    },
    {
        question: "What is the capital of Germany?",
        answers: [
            { answer: "Berlin", isCorrect: true },
            { answer: "Paris", isCorrect: false },
            { answer: "Madrid", isCorrect: false },
            { answer: "London", isCorrect: false },
        ],
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            { answer: "Rome", isCorrect: true },
            { answer: "Paris", isCorrect: false },
            { answer: "Madrid", isCorrect: false },
            { answer: "London", isCorrect: false },
        ],
    },
];
