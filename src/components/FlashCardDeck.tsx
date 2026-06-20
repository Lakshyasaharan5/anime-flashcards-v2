import FlashCard from "./FlashCard";
import Navigation from "./Navigation";
import { Cards } from "../assets/data";
import { useState } from "react";

function createShuffledIndexes(length: number): number[] {
    const indexes = Array.from({ length }, (_, index) => index);
    for (let i = indexes.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [indexes[i], indexes[randomIndex]] = [indexes[randomIndex], indexes[i]];
    }
    return indexes;
}

export default function FlashCardDeck() {
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [shuffledIndexes] = useState(() => createShuffledIndexes(Cards.length));
    const [guess, setGuess] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [currentStreak, setCurrentStreak] = useState<number>(0);
    const [longestStreak, setLongestStreak] = useState<number>(0);

    function checkGuess() {
        const answer = Cards[shuffledIndexes[index]].solution.toLowerCase();
        const guessed = guess.toLowerCase();
        if (answer === guessed) {
            setIsCorrect(true);
            setCurrentStreak((prevCurrent) => {
                const newCurrent = prevCurrent + 1;
                setLongestStreak((prevLongest) => {
                    const newLongest = Math.max(prevLongest, newCurrent);
                    return newLongest;
                })
                return newCurrent;
            });
        } else {
            setIsCorrect(false);
            setCurrentStreak(0);
        }
    }
    function toggleFlip() {
        setFlipped((prev) => !prev);
    }
    function goForward() {
        setFlipped(false);
        setIsCorrect(null);
        setGuess("");
        setIndex((prev) => prev + 1);
    }
    function goBackward() {
        setFlipped(false);
        setIsCorrect(null);
        setGuess("");
        setIndex((prev) => prev - 1);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="mb-4 flex gap-5">
                <p>Current Streak: {currentStreak}</p>
                <p>Longest Streak: {longestStreak}</p>
            </div>
            <FlashCard
                key={index}
                currentCard={Cards[shuffledIndexes[index]]}
                toggleFlip={toggleFlip}
                flipped={flipped}
            />
            <Navigation
                goForward={goForward}
                goBackward={goBackward}
                isFirst={index === 0}
                isLast={index === shuffledIndexes.length - 1}
                guess={guess}
                setGuess={setGuess}
                checkGuess={checkGuess}
                isCorrect={isCorrect}
                setIsCorrect={setIsCorrect}
            />
        </div>
    );
}