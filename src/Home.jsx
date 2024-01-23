import separator from '/separator_1.svg';
import portrait_small from '/portrait_small.png';

export default function Home() {
    return (<>
        <p className={`font-cursive text-2xl lg:text-3xl 2xl:text-4xl 2xl:pb-4`}>
            &nbsp;<span
            className={`text-3xl lg:text-4xl 2xl:text-5xl translate-y-1 px-0.5 inline-block`}>C</span>harles
            R. <span
            className={`text-3xl lg:text-4xl 2xl:text-5xl translate-y-1 px-0.5 inline-block`}>B</span>urgundy&nbsp;
        </p>
        <p className={`text-xl lg:text-2xl 2xl:text-3xl pt-5 font-bold`}>
            The War of Obsidian and Mist
        </p>
        <p className="text-3xl lg:text-4xl 2xl:text-5xl pb-2">
            The Fracture of Shackles
        </p>
        <div className="w-full justify-center pb-4 2xl:pb-6">
            <div className="w-1/2 m-auto">
                <img src={separator}/>
            </div>
        </div>
        <div className="text-justify tracking-wide 2xl:pb-10">
            <p className={`py-1 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3`}>
                The Fracture of Shackles is the first book of the War of Obsidian and Mist saga, an adult epic
                fantasy trilogy which borrows some elements from dark fantasy.
            </p>
            <p className={`py-1 first-letter:text-2xl first-letter:font-bold`}>
                It is the story of Valirian, a young nobleman solid into slavery to the empire of Koresh, his people’s
                sworn enemy. Prey to magic beyond his understanding, and far from home, he faces moral
                dilemmas as he witnesses the horrors of war.
            </p>
            <p className={`py-1 first-letter:text-2xl first-letter:font-bold`}>
                Delve into the themes of morality, guilt, and forgiveness in this coming of age story, embark on this
                literary journey of complex relationships, mysterious powers, and struggle for survival.
            </p>
            <div className="text-right">
                    Discover the book
                    <span className="leading-5 align-text-bottom">&#10170;</span>
            </div>
        </div>
        <div className="w-full justify-center pb-4 2xl:pb-6">
            <div className="w-1/2 m-auto">
                <img src={separator}/>
            </div>
        </div>
        <div className="text-justify tracking-wide 2xl:pb-10 flex flex-row gap-4">
            <div className="grow-0 w-1/4 border border-gray">
                <img src={portrait_small}/>
            </div>
            <div className="grow">
                Best author in town. Please read my books
                <div className="text-right">
                    Discover the author
                    <span className="leading-5 align-text-bottom">&#10170;</span>
                </div>
            </div>
        </div>
    </>);
}