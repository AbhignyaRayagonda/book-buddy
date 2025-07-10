import {useState, useEffect} from 'react';

const dialogues = [
    "Hey Buddy, Want to chat with your favourite book characters?",
    "Looking for a thrilling new book to dive into? Let me help you search thousands of title!",
    "Need a place to organize your books? Create your own personal library shelves.",
    "Fancy joining a book club? Let's connect you with other readers and start discussing!",
    "How about enjoying reading sessions together? Interactive and fun, just for you!",
]

const Home = () => {
    const [step, setStep] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const nextDialogue = () => {
        setIsFading(true);
        setStep((prev) => (prev + 1) % dialogues.length);
    }

    useEffect (()=> {
        if(isFading) {
            const timeout = setTimeout(()=>{
                setStep((prev)=> (prev+1)%dialogues.length);
                setIsFading(false);
            }, 500);
            return () => clearTimeout(timeout)
        }
    }, [isFading])
    return (
        <div className="max-w-6xl mx-auto flex items-center gap-8 p-8 min-h-[400px]">
            <div className="w-1/3 flex justify-center">
                <div className="w-48 h-64 bg-gray-300 rounded-lg flex items-center justify-center text-center p-4">
                    <p className="italic">Your friendly Book Buddy</p>
                </div>
            </div>

            {/* right: Chat bubble */}
            <div className="w-2/3 bg-blue-50 rounded-lg p-8 shadow-lg relative">
                <h2 className="text-2xl font-semibold mb-4">👋 Hi! I'm your Book Buddy</h2>

                {/* chat bubble style */}
                <div className={`bg-white p-6 rounded-xl shadow-md text-lg leading-relaxed relative max-w-xl transition-opacity duration-500 ${isFading?'opacity-0': 'opacity-100'}`}>
                    <p>{dialogues[step]}</p>
                    <div className="absolute bottom-0 left-8 w-6 h-6 bg-white rounded-tr-xl rotate-45 -mb-3 shadow-md"></div>


                </div>

                <button onClick={nextDialogue} 
                className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                >Tell me more</button>
            </div>
        </div>
    )
}

export default Home;