import separator from '/separator.svg';
import { useEffect } from "react";

export default function Volume2() {
    useEffect(() => {
        document.title = "The War of Obsidian and Mist - Book 2";
    }, []);
    return (<>
        <p className={`font-cursive text-dark-silver text-xl lg:text-2xl 2xl:text-3xl 2xl:pb-4`}>
            &nbsp;<span
            className={`text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block`}>C</span>harles
            R. <span
            className={`text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block`}>B</span>urgundy&nbsp;
        </p>
        <h1 className={`text-xl lg:text-2xl 2xl:text-3xl pt-5 pb-1 font-bold`}>
            The War of Obsidian and Mist
        </h1>
        <h1 className="text-xl pb-1">
            Book 2
        </h1>
        <div className="w-full justify-center py-10">
            <div className="w-2/5 m-auto">
                <img src={separator}/>
            </div>
        </div>
        <div className="text-justify tracking-wide 2xl:pb-10">
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                As you may have read, The War of Obsidian and Mist is a trilogy, and I am proud to announce that
                book 2 of the series is coming along well.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                Though I will not quite yet share too many details about the book itself, nor even talk about its title,
                it will not be long before it is released to you! I will share occasional news about the progress on
                both my website and social media, so keep in touch.
            </p>
        </div>
    </>);
}