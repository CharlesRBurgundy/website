import separator from '/separator.svg';
import cover from '/cover_3d.webp';
import { useEffect } from "react";

export default function Book1() {
    useEffect(() => {
        document.title = "The War of Obsidian and Mist - Book 1 - The Fracture of Shackles";
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
                Book 1
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
        <p className="px-4 pb-4 md:px-24 font-cursive italic text-xl first-letter:text-4xl">
            When forced in a war that isn't his, how can an enslaved nobleman combine honour and survival ?
        </p>
        <div className="text-justify tracking-wide">
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                Captured by pirates at sea, Valirian, a young nobleman from the kingdom of Vinmara, is sold into
                slavery to the empire of Koresh, his people’s sworn enemy. He comes into the service of Alexar, a
                powerful and influential Koreshian general, whose designs for the young man are as obscure as they
                are an ill omen.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                But war is near, for the Emperor of Koresh, a centuries-old and powerful sorcerer named Tarasmir,
                plans to unleash his legions to conquer new land. Forced to adapt to a hostile environment, Valirian
                comes to learn the price he must pay to stay alive. As war takes him far away from home, he will be
                forced to make a choice—one that may cost him his life.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                Fate is a cruel mistress in love with irony. Will Valirian find redemption, or are some doomed to
                repeat the same mistakes until the very end?
            </p>
            <div className="text-center my-8">
                <div className="mb-2">Pre-order now!</div>
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
                    Barnes and Noble
                </a>
            </div>
        </div>
        <p className="text-justify text-xl pt-5 font-bold">
            A Quick Glance
        </p>
        <div className="md:flex md:flex-row 2xl:pb-10 items-center">
            <img className="w-64 md:w-48 max-sm:m-auto p-4 pb-0" src={cover} alt="book 3d cover"/>
            <div className="text-justify tracking-wide">
                <p className="py-1">
                    <b>Series Title:</b> The War of Obsidian and Mist<br/>
                    <b>Book Title:</b> The Fracture of Shackles<br/>
                    <b>Genre:</b> Fantasy<br/>
                    <b>Age Category:</b> Adult<br/>
                    <b>ISBN Paperback:</b> 978-2-9591370-0-6<br/>
                    <b>ISBN eBook:</b> 978-2-9591370-1-3<br/>
                </p>
            </div>
        </div>
    </>);
}