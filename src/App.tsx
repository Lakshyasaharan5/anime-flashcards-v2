import FlashCard from "./components/FlashCard"
import Header from "./components/Header"
import Navigation from "./components/Navigation"

function App() {
    return (
        <div className="bg-violet-100 min-h-screen pt-16 flex flex-col items-center">
            <Header />
            <FlashCard />
            <Navigation />
        </div>
    )
}

export default App
