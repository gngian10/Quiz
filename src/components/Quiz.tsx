import type { Question } from "../types/quizTypes";

interface QuizProps {
    question: Question;
    currentIndex: number;
    total: number;
    selected: number | null;
    onSelect: (index: number) => void;
    onSubmit: () => void;
}

export const Quiz = ({
    question,
    currentIndex,
    total,
    selected,
    onSelect,
    onSubmit,
}: QuizProps) => {
    return (
        <>
            <p>
                Question {currentIndex + 1} of {total}
            </p>

            <h1 className="text-2xl font-bold">{question.question}</h1>

            <div className="grid grid-cols-2 gap-4">
                {question.answers.map((answer, i) => (
                    <button
                        key={answer.answer}
                        className={`p-2 rounded-md text-black ${
                            selected === i ? "bg-blue-300" : "bg-gray-200"
                        }`}
                        onClick={() => onSelect(i)}
                    >
                        {answer.answer}
                    </button>
                ))}
            </div>

            <button
                onClick={onSubmit}
                disabled={selected === null}
                className="bg-gray-200 p-2 rounded-md text-black disabled:opacity-50"
            >
                Submit
            </button>
        </>
    );
};
