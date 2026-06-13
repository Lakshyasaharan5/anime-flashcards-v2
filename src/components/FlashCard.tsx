import { useState } from "react";

export default function FlashCard() {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="h-72 w-lg cursor-pointer perspective:1000px"
            onClick={() => setFlipped((current) => !current)}>
            <div className={`relative h-full w-full transition-transform duration-500 transform-3d ${flipped ? "transform-[rotateY(180deg)]" : ""} `}>
                /* Front */
                <div className="absolute inset-0 rounded-md border shadow-2xl p-2 flex items-center justify-center bg-white backface-hidden">
                    <p>A notebook can kill anyone whose name is written in it.</p>
                </div>
                /* Back */
                <div className="absolute inset-0 rounded-md border shadow-2xl flex items-center justify-center bg-violet-400 backface-hidden transform-[rotateY(180deg)]">
                    <p>Death Note</p>
                </div>
            </div>
        </div>
    );
}