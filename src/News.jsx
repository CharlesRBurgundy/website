import {  useEffect } from "react";
import separator from '/separator.svg';
import { NavLink } from "react-router-dom";

export default function News() {
    useEffect(() => {
        document.title = "Charles R. Burgundy - News";
    }, []);
    return (<>
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl">
            News
        </h1>
        {/* Debut de la news */}
        <div className="text-justify tracking-wide">
            <div className="w-full justify-center py-8">
                <div className="w-2/5 m-auto">
                    <img src={separator} alt="---"/>
                </div>
            </div>
            <h2 className="text-center text-xl pb-1">A First announcement, and a cover</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 24th of January 2024</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                This very first news post is an excellent occasion for me to make an exciting announcement: my
                debut novel, The Fracture of Shackles, will be released on the <span className="text-gold font-bold">24th of February 2024</span>, in exactly a
                month! It won’t be long before pre-orders are made available and until I announce in greater details
                where you can get your copy, so stay tuned.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                And after many months of work, this post is also the perfect time to share my novel’s cover, <a className="text-gold font-bold underline underline-offset-2" href="https://www.artstation.com/alexis-susani" target="_blank">made
                by the excellent Alexis Susani</a>.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                Before even contacting Alexis, I had a clear vision in mind of what I wished to have for my cover.
                As the central element of my book is the relations between my various characters, it was clear that
                one of the most important of them needed to be depicted there. The greatest challenge was to find
                the right artist to bring that vision to life, and I can now say that this was a success.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                I invite you to discover more about my debut novel on <NavLink className="text-gold font-bold underline underline-offset-2" to="/book-1">this page</NavLink>, and
                follow me on social media for the latest news about The Fracture of Shackles, as well as <NavLink className="text-gold font-bold underline underline-offset-2" to="/book-2">book 2</NavLink> of
                the War of Obsidian and Mist series.
            </p>
            <div className="text-right font-cursive text-dark-silver text-xl pr-12 pt-4">
                &nbsp;<span
                className="text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block">C</span>harles
                R. <span
                className="text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block">B</span>urgundy&nbsp;
            </div>
        </div>
        {/* Fin de la news */}
    </>);
}