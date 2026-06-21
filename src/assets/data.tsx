export type Card = {
    problem: string;
    solution: string;
    difficulty: "easy" | "medium" | "hard";
    image: string;
}

export const Cards: Card[] = [
    {
        problem: "Which psychological thriller follows a doctor hunting a former patient who became a dangerous criminal?",
        solution: "Monster",
        difficulty: "hard",
        image: "/monster.jpg"
    },
    {
        problem: "Which romance anime follows Sakuta as he investigates strange supernatural problems affecting teenagers?",
        solution: "Bunny Girl Senpai",
        difficulty: "medium",
        image: "/bunny-girl.jpg"
    },
    {
        problem: "Which anime continues Goku's adventures as he battles increasingly powerful opponents across different universes?",
        solution: "Dragon Ball Super",
        difficulty: "easy",
        image: "/dragon-ball.jpg"
    },
    {
        problem: "Which comedy anime follows a college student who joins a diving club filled with chaotic members?",
        solution: "Grand Blue",
        difficulty: "medium",
        image: "/grand-blue.png"
    },
    {
        problem: "Which comedy isekai follows Kazuma and his unusually dysfunctional group of adventurers?",
        solution: "Konosuba",
        difficulty: "easy",
        image: "/konosuba.jpg"
    },
    {
        problem: "Which romantic comedy features two student council members trying to make the other confess first?",
        solution: "Love is War",
        difficulty: "easy",
        image: "/love-is-war.jpg"
    },
    {
        problem: "Which romance anime places high school students into a marriage-training program with assigned partners?",
        solution: "More Than a Married Couple",
        difficulty: "medium",
        image: "/more-then-married-couple.jpg"
    },
    {
        problem: "Which anime follows a young ninja who dreams of becoming the leader of his village?",
        solution: "Naruto",
        difficulty: "easy",
        image: "/naruto.png"
    },
    {
        problem: "Which isekai anime follows Makoto after he is rejected by a goddess and sent to the edge of another world?",
        solution: "Tsukimichi: Moonlit Fantasy",
        difficulty: "hard",
        image: "/tsukimichi.png"
    },
    {
        problem: "Which romance anime follows Akane as she becomes closer to a highly skilled gamer she meets online?",
        solution: "Loving Yamada at Lv999",
        difficulty: "hard",
        image: "/yamada.jpg"
    },
    {
        problem: "Which romantic comedy follows Naoya as he attempts to maintain relationships with more than one girlfriend?",
        solution: "Girlfriend, Girlfriend",
        difficulty: "medium",
        image: "/girlfriend-girlfriend.jpg"
    },
    {
        problem: "Which action anime follows Denji after he merges with his chainsaw-shaped devil companion?",
        solution: "Chainsaw Man",
        difficulty: "easy",
        image: "/chainsaw.png"
    },
    {
        problem: "Which action anime follows a weak hunter who gains the ability to increase his strength by leveling up?",
        solution: "Solo Leveling",
        difficulty: "easy",
        image: "/solo-level.png"
    },
    {
        problem: "Which crime drama follows Ash Lynx as he investigates the mystery behind the phrase Banana Fish?",
        solution: "Banana Fish",
        difficulty: "hard",
        image: "/banana.jpg"
    }
];

