import FlashCard from "./FlashCard";
import Navigation from "./Navigation";
import { Cards } from "../assets/data";
import { useState } from "react";
import isFuzzyMatch from "@/lib/fuzzyMatch";

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
    const [shuffledIndexes, setShuffledIndexes] = useState(() => createShuffledIndexes(Cards.length));
    const [guess, setGuess] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [currentStreak, setCurrentStreak] = useState<number>(0);
    const [longestStreak, setLongestStreak] = useState<number>(0);
    const [masteredIndexes, setMasteredIndexes] = useState<number[]>([]);

    function markAsMastered() {
        const currentCardIndex = shuffledIndexes[index];

        setMasteredIndexes((previous) => {
            if (previous.includes(currentCardIndex)) {
                return previous;
            }

            return [...previous, currentCardIndex];
        });

        const remainingIndexes = shuffledIndexes.filter(
            (cardIndex) => cardIndex !== currentCardIndex
        );

        setShuffledIndexes(remainingIndexes);

        setFlipped(false);
        setIsCorrect(null);
        setGuess("");

        if (index >= remainingIndexes.length) {
            setIndex(Math.max(remainingIndexes.length - 1, 0));
        }
    }

    function shuffleCards() {
        const currentCardIndex = shuffledIndexes[index];
        const newShuffledIndexes = createShuffledIndexes(Cards.length);
        const newCurrentPosition =
            newShuffledIndexes.indexOf(currentCardIndex);
        setShuffledIndexes(newShuffledIndexes);
        setIndex(newCurrentPosition);
    }

    function checkGuess() {
        const answer = Cards[shuffledIndexes[index]].solution.toLowerCase();
        const guessed = guess.toLowerCase();
        if (isFuzzyMatch(answer, guessed)) {
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

    if (shuffledIndexes.length === 0) {
        return (
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold">
                    You mastered every card!
                </h2>

                <p>Mastered cards: {masteredIndexes.length}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <div className="mb-4 flex gap-5">
                <p>Current Streak: {currentStreak}</p>
                <p>Longest Streak: {longestStreak}</p>
            </div>
            <div className="relative">
                <button
                    type="button"
                    onClick={markAsMastered}
                    className="absolute right-2 top-2 z-10 rounded-md bg-violet-400 px-3 py-1 text-sm text-white"
                >
                    Mastered
                </button>
                <FlashCard
                    key={shuffledIndexes[index]}
                    currentCard={Cards[shuffledIndexes[index]]}
                    toggleFlip={toggleFlip}
                    flipped={flipped}
                />
            </div>
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
                shuffleCards={shuffleCards}
            />
        </div>
    );
}