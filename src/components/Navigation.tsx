import ForwardIcon from '@mui/icons-material/Forward';
import { Input } from './ui/input'
import { Button } from './ui/button';

type NavigationProps = {
    goForward: () => void,
    goBackward: () => void,
    isFirst: boolean,
    isLast: boolean,
    guess: string,
    setGuess: React.Dispatch<React.SetStateAction<string>>,
    checkGuess: () => void,
    isCorrect: boolean | null,
    setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>,
    shuffleCards: () => void,
}

export default function Navigation(props: NavigationProps) {
    return (
        <div className="mt-5 flex gap-2 items-center">
            <button disabled={props.isFirst} className='hover:cursor-pointer disabled:text-gray-400' onClick={props.goBackward}>
                <ForwardIcon className="rotate-180" sx={{ fontSize: 60 }} />
            </button>
            <button disabled={props.isLast} className='hover:cursor-pointer disabled:text-gray-400' onClick={props.goForward}>
                <ForwardIcon sx={{ fontSize: 60 }} />
            </button>
            <Input
                size={20}
                className=
                {`                     
                    bg-white
                    ${props.isCorrect === null
                        ? "border-gray-300"
                        : props.isCorrect
                            ? "border-3 border-green-400 shadow-[0_0_40px_rgba(74,222,128,0.8)]"
                            : "border-3 border-red-400 shadow-[0_0_40px_rgba(248,113,113,0.8)]"
                    }                                    
                `}
                placeholder="Try to guess!"
                value={props.guess}
                onChange={(e) => props.setGuess(e.target.value)}
            />
            <Button size='lg' className='hover:cursor-pointer' onClick={props.checkGuess}>Check</Button>
            <Button size='lg' className='hover:cursor-pointer' onClick={props.shuffleCards}>Shuffle Cards</Button>
        </div>
    );
}