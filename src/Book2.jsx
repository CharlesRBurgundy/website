import separator from '/separator.svg';
import { useEffect } from "react";

export default function Book2() {
    useEffect(() => {
        document.title = "The War of Obsidian and Mist - Book 2 - A Home of Mist";
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
            <span className="text-xl pb-1">
                Book 2
            </span><br />
            <span className="text-3xl lg:text-4xl 2xl:text-5xl">
                A Home of Mist
            </span>
        </h1>
        <div className="w-full justify-center py-10">
            <div className="w-2/5 m-auto">
                <img src={separator} alt="---"/>
            </div>
        </div>
        <p className="px-4 pb-4 md:px-24 font-cursive italic text-xl first-letter:text-4xl">
            In a land torn by war, the fate of thousands is to be decided by the bravery of a few.
        </p>
        <div className="text-justify tracking-wide 2xl:pb-10">
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                Beginning right after the end of the Fracture of Shackles, A Home of Mist continues the tale with
				unexpected turns, a continued fight for survival, and fated confrontations. In this chaos, death is
				everywhere, and all hope seems lost. Will a victor ever emerge?
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                This second book of the War of Obsidian and Mist trilogy is coming in April 2025, though I have yet
				to announce the exact date. Follow me on social media to make sure you miss none of the latest news!
            </p>
        </div>
    </>);
}