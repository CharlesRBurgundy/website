import separator from '/separator.svg';
import cover from '/cover_3d.webp';
import { useEffect, useState } from "react";

export default function Book1() {
    const [wideImage, setWideImage] = useState(false);
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
            Whose voice whispers freedom in the dark?
        </p>
        <div className="text-justify tracking-wide">
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                Captured beneath the banner of a crimson sun, Valirian’s life as a noble ends the moment his freedom
                is sold. Once heir to a peaceful land, he awakens in the shadow of the Koreshian Empire, where slaves
                are broken and the will to dream is a dangerous thing.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                Forced into the brutal depths of the Kennels and later into the service of a feared general, Valirian
                must navigate a realm where power is worshipped and mercy is scarce.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                Each day tests his resolve as his new condition makes him all too accustomed to cruelty, betrayal, and
                the slow erosion of everything he once believed. Yet beneath the weight of chains, a flicker of defiance
				survives, and through pain he begins to see the world not as he was taught, but as it truly is.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                In a landscape steeped in ambition and dark magic, Valirian’s struggle becomes more than survival—it becomes
                a reckoning. The choices he makes will decide not only his fate but the destiny of all who still dare to hope.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                The Fracture of Shackles is a sweeping tale of dark fantasy and magical realism, where loyalty and rebellion
                blur and the fight for freedom becomes the fight for one’s soul.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                The empire awaits. Will you stand or kneel?
            </p>
            <div className="text-center my-8">
                <div className="mb-2">Get your copy now!</div>
                <a
                    className="inline-block bg-gold px-4 py-2 rounded-lg font-bold text-lg mx-2 mb-2"
                    href="https://mybook.to/kk3Pqs"
                    target="_blank"
                >
                    Paperback
                </a>
                <a
                    className="inline-block bg-gold px-4 py-2 rounded-lg font-bold text-lg mx-2"
                    href="https://books2read.com/u/mBknYO"
                    target="_blank"
                >
                    eBook
                </a>
            </div>
        </div>
        <p className="text-justify text-xl pt-5 font-bold">
            A Quick Glance
        </p>
        <div className={`${wideImage?'':'md:flex md:flex-row'} 2xl:pb-10 items-center`}>
            <img className={`${wideImage?'w-full cursor-zoom-out':'w-64 md:w-48 lg:w-64 p-4 cursor-zoom-in'} max-sm:m-auto pb-0`} src={cover} alt="book 3d cover" onClick={()=>setWideImage(!wideImage)}/>
            <div className="text-justify tracking-wide">
                <p className="py-1">
                    <b>Series Title:</b> The War of Obsidian and Mist<br/>
                    <b>Book Title:</b> The Fracture of Shackles<br/>
                    <b>Genre:</b> Fantasy<br/>
                    <b>Age Category:</b> Adult<br/>
                    <b>ISBN Paperback:</b> 978-2-9591370-2-0<br/>
                    <b>ISBN eBook:</b> 978-2-9591370-3-7<br/>
                </p>
            </div>
        </div>
    </>);
}