import { useState } from "react";
import { quizQuestions } from "../constants/questionData";
import { Quiz } from "./Quiz";
import { QuizFinished } from "./QuizFinished";

export const QuizLayout = () => {
    const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);

    const isFinished = index === quizQuestions.length;
    const currentQuestion = quizQuestions[index];

    const handleSelect = (answerIndex: number) => setSelected(answerIndex);

    const handleSubmit = () => {
        if (quizQuestions[index].answers[selected!].isCorrect) {
            setScore((prev) => prev + 1);
        }
        setSelected(null);
        setIndex((prev) => prev + 1);
    };

    const handleRestart = () => {
        setScore(0);
        setIndex(0);
        setSelected(null);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            {isFinished ? (
                <QuizFinished
                    score={score}
                    total={quizQuestions.length}
                    onRestart={handleRestart}
                />
            ) : (
                <Quiz
                    question={currentQuestion}
                    currentIndex={index}
                    total={quizQuestions.length}
                    selected={selected}
                    onSelect={handleSelect}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};
