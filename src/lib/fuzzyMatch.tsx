function levenshteinDistance(a: string, b: string): number {
    const matrix = Array.from({ length: b.length + 1 }, () =>
        Array(a.length + 1).fill(0)
    );

    for (let i = 0; i <= b.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            const cost = b[i - 1] === a[j - 1] ? 0 : 1;

            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,     // deletion
                matrix[i][j - 1] + 1,     // insertion
                matrix[i - 1][j - 1] + cost // replacement
            );
        }
    }

    return matrix[b.length][a.length];
}

function normalizeText(value: string): string {
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
}

export default function isFuzzyMatch(answer: string, guess: string): boolean {
    const normalizedAnswer = normalizeText(answer);
    const normalizedGuess = normalizeText(guess);

    if (!normalizedGuess) return false;

    const distance = levenshteinDistance(
        normalizedAnswer,
        normalizedGuess
    );

    const allowedMistakes =
        normalizedAnswer.length <= 4
            ? 0
            : normalizedAnswer.length <= 8
                ? 1
                : 2;

    return distance <= allowedMistakes;
}