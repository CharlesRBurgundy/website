import separator from '/separator.svg';
import portrait_small from '/portrait_small.jpg';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram } from "@mdi/js";

export default function Home() {
    useEffect(() => {
        document.title = "Charles R. Burgundy - The War of Obsidian and Mist";
    }, []);
    return (<>
        <h2 className={`font-cursive text-dark-silver text-xl lg:text-2xl 2xl:text-3xl 2xl:pb-4`}>
            &nbsp;<span
            className={`text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block`}>C</span>harles
            R. <span
            className={`text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block`}>B</span>urgundy&nbsp;
        </h2>
        <h1>
            <span className={`text-xl lg:text-2xl 2xl:text-3xl pt-5 pb-1 font-bold`}>
                The War of Obsidian and Mist
            </span><br />
            <span className="text-3xl lg:text-4xl 2xl:text-5xl">
                The Fracture of Shackles
            </span>
        </h1>
        <div className="w-full justify-center py-8">
            <div className="w-2/5 m-auto">
                <img src={separator} alt="---"/>
            </div>
        </div>
        <div className="text-justify tracking-wide">
            <p className={`py-1 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3`}>
                The Fracture of Shackles is the first book of the War of Obsidian and Mist saga, an adult
                fantasy trilogy which borrows some elements from dark and epic fantasy.
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
            <div className="text-right text-gold py-2 underline decoration-gold/[.5] underline-offset-4">
                <NavLink to="/book-1">&nbsp;Discover the book →&nbsp;</NavLink>
            </div>
        </div>
        <div className="text-center my-8">
            <div className="mb-2">Get your copy now!</div>
            <a
                className="inline-block bg-gold px-4 py-2 rounded-lg font-bold text-lg mx-2 mb-2"
                href="https://mybook.to/NSZU"
                target="_blank"
            >
                Amazon
            </a>
            <a
                className="inline-block bg-gold px-4 py-2 rounded-lg font-bold text-lg mx-2"
                href="https://www.barnesandnoble.com/w/the-fracture-of-shackles-charles-richard-burgundy/1144762298"
                target="_blank"
            >
                Barnes & Noble
            </a>
            <a
                className="inline-block bg-gold px-4 py-2 rounded-lg font-bold text-lg mx-2"
                href="https://books2read.com/u/m2KaxG"
                target="_blank"
            >
                eBook
            </a>
        </div>
        <div className="w-full justify-center py-8">
            <div className="w-2/5 m-auto">
                <img src={separator} alt="---"/>
            </div>
        </div>
        <div className="text-justify tracking-wide 2xl:pb-10 flex flex-row gap-4">
            <div className="grow-0 shrink-0 w-32 h-32 opacity-80 border-2 border-gold">
                <img src={portrait_small} alt="author portrait"/>
            </div>
            <div className="grow">
                <p className="pt-2">
                Storytelling has always had a special place in my heart. Whether it was reading books until late at
                night, listening to historical anecdotes, or creating stories while alone in my room, there is
                something that always resonated within me.
                </p>
                <div className="text-right text-gold py-2 underline decoration-gold/[.5] underline-offset-4">
                    <NavLink to="/about">&nbsp;Discover the author →&nbsp;</NavLink>
                </div>
            </div>
        </div>
        <div className="w-full justify-center py-8">
            <div className="w-2/5 m-auto">
                <img src={separator} alt="---"/>
            </div>
        </div>
        <div className="text-center 2xl:pb-10">
            <a
                className="inline-block bg-gold px-4 py-2 rounded-lg font-bold text-lg mx-2 mb-2"
                href="https://mailchi.mp/6edfaed1f036/charles-r-burgundy"
                target="_blank"
            >
                Subscribe to my newsletter
            </a>
        </div>
        <div className="flex flex-row gap-8 justify-center">
            <div className="text-center">
                <a
                    href="https://www.instagram.com/charlesrburgundy/"
                    target="_blank"
                    className="inline-block"
                >
                    <Icon path={mdiInstagram} size={2}/>
                </a>
            </div>
            <div className="text-center">
                <a
                    href="https://www.facebook.com/profile.php?id=61556143042288"
                    target="_blank"
                    className="inline-block"
                >
                    <Icon path={mdiFacebook} size={2}/>
                </a>
            </div>
            <div className="text-center w-12">
                <a
                    href="https://twitter.com/C_R_Burgundy"
                    target="_blank"
                    className="inline-block scale-[1.7] py-3"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                        <g>
                            <path
                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                fill="#D0D0D0"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </>);
}