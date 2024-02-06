import signature from '/signature.svg';
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram } from "@mdi/js";

export default function About() {
    return (<>
        <p className="font-cursive text-dark-silver -rotate-3 text-2xl lg:text-3xl 2xl:text-5xl 2xl:pb-10">
            &nbsp;<span
            className="text-3xl lg:text-4xl 2xl:text-6xl translate-y-1 px-0.5 inline-block">C</span>harles
            R. <span
            className="text-3xl lg:text-4xl 2xl:text-6xl translate-y-1 px-0.5 inline-block">B</span>urgundy&nbsp;
        </p>
        <div className="text-justify tracking-wide 2xl:pb-10">
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                Storytelling has always had a special place in my heart. Whether it was reading books until late at
                night, listening to historical anecdotes, or creating stories while alone in my room, there is
                something that always resonated within me.
            </p>
            <p className="py-2 first-letter:text-2xl first-letter:font-bold">
                From the long list of books and tales that had an impact on me, I could cite the legends of King
                Arthur, <i>The Lord of the Rings</i>, or, more recently, <i>A Song of Ice and Fire</i>, but also games like
                <i>Warcraft 2 and 3</i>, or the original <i>Baldur’s Gates</i>, that were all important parts of my teenage years.
                To cite all the amazing works that marked me would be tediously long, but they certainly all
                contributed to my love for fantasy.
            </p>
            <p className="py-2 first-letter:text-2xl first-letter:font-bold">
                I can hardly believe that six years have passed since I started imagining many of the scenes in my
                first book. I certainly did not think, back then, that those few scenes I had put on a page would turn
                into a proper novel I would actually be publishing. However, in spite of the few bumps on the road,
                I find myself drawn to this path more and more. I can promise quite a few more books will be
                coming along the way.
            </p>
            <div className="text-right md:text-center">
                <img className="inline md:ml-60 w-44 -rotate-6" src={signature} alt="signature"/>
            </div>
            <div className="text-center pt-8 pb-2">
                Follow me on my social media accounts
            </div>
            <div className="flex flex-row gap-8 justify-center">
                <div className="text-center">
                    <a
                        href="https://www.instagram.com/charlesrburgundy/"
                        target="_blank"
                        className="inline-block"
                    >
                        <Icon path={mdiInstagram} size={2} />
                    </a>
                </div>
                <div className="text-center">
                    <a
                        href="https://www.facebook.com/profile.php?id=61556143042288"
                        target="_blank"
                        className="inline-block"
                    >
                        <Icon path={mdiFacebook} size={2} />
                    </a>
                </div>
                <div className="text-center">
                    <a
                        href="https://twitter.com/C_R_Burgundy"
                        target="_blank"
                        className="inline-block scale-[1.7] py-3"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                            <g>
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#D0D0D0"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </>);
}