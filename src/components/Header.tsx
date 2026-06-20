import { Cards } from "../assets/data";

export default function Header() {
    return (
        <header className="text-center space-y-4 mb-5">
            <h1 className="text-3xl font-bold">Anime Flashcards</h1>
            <p className="text-gray-600">How well do you know your favorite anime?</p>
            <p>Total cards: {Cards.length}</p>
        </header>
    );
}