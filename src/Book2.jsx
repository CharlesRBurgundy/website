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
            In a land torn apart by war, the fate of thousands is to be decided by the bravery of a few.
        </p>
        <div className="text-justify tracking-wide 2xl:pb-10">
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                The Battle of the Fortress is over. Those who remain struggle to find reasons to rejoice. Thousands
				lie dead, and there is much Valirian must rebuild. As Syrela, the War Hero, is nowhere to be seen,
				and as trusting the Duchess, Lady Adiloka, seems evermore impossible, one thing becomes clear: this
				conflict is far from finished.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                At a turning point in history, where attempts at a diplomatic resolution look trickier at every
				unexpected turn and unforeseen event, the survival of a nation is at stake. In this fratricidal
				war, will a victor ever emerge?
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                Often, all hope for peace seems lost, especially as the red eye of the Lion of Obsidian, Tarasmir,
				the Emperor of Koresh, looms on the horizon. Visions of a dark future plague many, yet there remains
				a faint glimmer of hope. Does it shine bright enough? Will those fighting for a better future triumph?
            </p>
            <div className="text-center my-8">
                <div className="mb-2">Coming out on the second half of April 2025!</div>
            </div>
        </div>
    </>);
}