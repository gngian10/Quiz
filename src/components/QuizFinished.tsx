interface QuizFinishedProps {
    score: number;
    total: number;
    onRestart: () => void;
}

export const QuizFinished = ({
    score,
    total,
    onRestart,
}: QuizFinishedProps) => (
    <>
        <h1 className="text-2xl font-bold">
            You scored {score} out of {total}
        </h1>
        <button
            onClick={onRestart}
            className="bg-gray-200 p-2 rounded-md text-black"
        >
            Restart
        </button>
    </>
);
