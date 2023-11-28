import backgroundNoiseImage from '/noise.png';
import ladyImage from '/lady.png';

function App() {
    return (
        <div className="fixed w-screen h-screen overflow-hidden bg-dark-purple">
            <div className="absolute -z-10 bottom-0 left-0 w-screen h-screen bg-noise bg-cover opacity-70" />
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 flex animate-fade">
                <div className="hidden md:block md:w-2/5 h-full">
                    <div className="absolute max-w-[50vw] max-h-[100vh] bottom-0 -left-12 brightness-0 blur-xl opacity-20">
                        <img src={ladyImage} />
                    </div>
                    <div className="absolute max-w-[50vw] max-h-[100vh] bottom-0 -left-4 grayscale hover:grayscale">
                        <img src={ladyImage} />
                    </div>
                </div>
                <div className="md:w-3/5 animate-fade">
                    <div className="inline-block bg-dark-grey text-center text-silver font-serif
                                    p-4 sm:p-12 md:p-8 lg:p-12 shadow-lg shadow-dark-grey/20">
                        <p className="font-cursive text-2xl lg:text-3xl
                                        underline decoration-2 decoration-light-grey">
                            &nbsp;Charles R. Burgundy&nbsp;
                        </p>
                        <p className="text-xl lg:text-2xl pt-5 font-bold text-light-grey">
                            The War of Obsidian and Mist
                        </p>
                        <p className="text-3xl lg:text-4xl pb-8">
                            The Fracture of Shackles
                        </p>
                        <div className="text-justify indent-8 tracking-wide">
                            <p className="py-1 first-letter:text-2xl first-letter:text-light-grey first-letter:font-bold">
                                Captured by pirates at sea, Valirian, a young nobleman from the kingdom of Vinmara, is sold into slavery to the empire of Koresh, his people’s sworn enemy. He comes under the service of Alexar, a powerful and influential Koreshian general, whose designs for the young man are as obscure as they are an ill omen.
                            </p>
                            <p className="py-1 first-letter:text-2xl first-letter:text-light-grey first-letter:font-bold">
                                But war is near, for the Emperor of Koresh, a centuries-old and powerful sorcerer named Tarasmir, plans to unleash his legions to conquer new land. Forced to adapt to a hostile environment, Valirian comes to learn the price he must pay to stay alive. As war takes him far away from home, the young man will be forced to make a choice—one that may cost his own life.
                            </p>
                            <p className="py-1 first-letter:text-2xl first-letter:text-light-grey first-letter:font-bold">
                                Fate is a cruel mistress in love with irony. Will Valirian find redemption, or are some doomed to repeat the same mistakes until the very end?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
