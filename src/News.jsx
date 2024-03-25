import {  useEffect } from "react";
import separator from '/separator.svg';
import Clover2 from '/Clover2.png';
import { NavLink } from "react-router-dom";

export default function News() {
    useEffect(() => {
        document.title = "Charles R. Burgundy - News";
    }, []);
    return (<>
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl">
            News
        </h1>
        <div className="text-justify tracking-wide">
            <div className="w-full justify-center py-8">
                <div className="w-2/5 m-auto">
                    <img src={separator} alt="---"/>
                </div>
            </div>
            <h2 className="text-center text-xl pb-1">Lucky Seven Indie Author Promotion!</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 22nd of March 2024</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                Here is the much-promised, exciting piece of news! To end this month of March in a grandiose way, I
				have the pleasure to announce that the following eBooks will all be available for just 0.99 from the
				22nd of March to the 29th!
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                1 <a className="text-gold font-bold underline underline-offset-2" href="https://www.amazon.com/Chosen-Ones-Best-Friend/dp/B0CVG25FPL/" target="_blank">The Chosen One's Best Friend:</a> Freshman year has not been kind to Gail Thompson. Half of her friends
				went to different schools and her best friend ghosted her just after Thanksgiving. As the school year
				comes to a close, she'll just be glad to make it to the summer where she'll at least get some sense
				of normalcy again. However, when her birthday comes around she gets an unexpected text from her best
				friend Rachael has Gail finding her friend knocked out in the woods being attacked by a shadow monster?!
			</p>
			<p>
				After Rachael fends the monster off with magic literally bursting from her finger, Gail finds herself
				faced with a world she never knew existed. One of magic and danger that her best friend has been fighting
				back for nearly half a year to keep their town safe. With no magic of her own, no clue what she’s facing
				and no fighting skills to speak of, Gail is just about to find out how hard it can be to be the chosen
				one's best friend.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                2 <a className="text-gold font-bold underline underline-offset-2" href="https://www.amazon.com/dp/B07FDB39TR" target="_blank">Rights of Use:</a> In the 1960s, Project Blue Book assured America that no aliens visited its amber waves or
				shining seas. Thirty years later, Project Black Book knows better and has the flying saucers to prove it,
				but they still can’t stop the body-possessing Kemtewet from scooping their pick of young women from Earth
				to host an alien queen.
			</p>
			<p>
				Sarah Anderson yearned for an escape from her new life in PA, but not for this:
				being kidnapped by aliens and faced with a choice between having a Kemtewet queen erase her brain or
				sharing her body with a Gertewet insurgent. Unless the Air Force can rescue her in time, it's either
				death or a chance to make a difference in the galaxy. With Sarah, the Gertewet have one last shot to end
				the Kemtewet Empire and free billions of humans subject to their body markets.
			</p>
			<p>
				In a war over consent, only some things are black and white.
			</p>
			<p>
				CW: rape parallels, literal cultural appropriation 
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
				3 <a className="text-gold font-bold underline underline-offset-2" href="https://a.co/d/aY5zezO" target="_blank">Lost Zodiac: Dream of the Wolf:</a> Eren had always sensed a certain connection to the Wolf Zodiac, a subtle
				thread linking her to something greater. However, that link remained shrouded in disbelief until
				an unbidden dream shattered her skepticism. Suddenly thrust into a perilous quest to safeguard not
				just her own Zodiac, but the entire celestial order, she's compelled to harness the newfound power
				coursing through her veins. Opting to forsake her familiar home, she embarks on a journey through
				the dense forest, accompanied by her loyal wolf companion. Yet, danger seems to linger in every
				shadow, and a chance encounter with an unfamiliar tribe only adds to her trepidation. Amidst the
				unfolding challenges, a pressing question haunts her: can she truly master her newly acquired power
				if she struggles to even commune with her wolf? As the sands of time slip through her grasp, will
				she unravel the secrets of her power in time to rescue all that she cherishes?
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
				4 <a className="text-gold font-bold underline underline-offset-2" href="https://a.co/d/eSyVf6E" target="_blank">Lost Zodiac: Trial of the Ram:</a> The adventure continues...
			</p>
			<p>
				Naomi trained Eren, as promised. Together, the two found solace in each other with the looming
				threat of the monster overhead. While Eren wants to fight the monster, for Naomi, the spectre of
				this creature has been a haunting presence, a dark cloud overshadowing their lives. The true shift
				occurs when the malevolent force that once haunted Naomi transforms from a mere threat into a
				terrifying reality, altering the course of their destinies.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
				5 <a className="text-gold font-bold underline underline-offset-2" href="https://www.amazon.com/Lolas-Haunter-J-Neira-ebook/dp/B0CFX4BC7L" target="_blank">Lola's Haunter:</a> Lola's dreams are haunted by memories of Darwin's Drop, the amusement park that
				closed after being the cause of a puzzling accident. It's been nine years, but Lola hasn't forgotten
				the terrifying eyes of that mascot. Sometimes, she imagines she feels the blood splattering her face
				from the scene of the accident.
			</p>
			<p>
				But Darwin's Drop has been closed for nine years, its grounds overrun with nature. There are other
				things to occupy Lola's mind. When she isn't devoting her time to unrelated college studies or parties
				where she can imitate viral Goth dances, she spends her time searching for evidence of the supernatural
				with her skeptic friend, Olivia.
			</p>
			<p>
				Her world changes when she is tricked into attending a party and ends up getting into a brutal brawl
				with a rich girl, who she attempts to cancel the next day. That same night, she is lured back to the now
				overrun with nature Darwin's Drop and has a terrifying encounter. Believing she has found proof of ghosts;
				Lola determines to return to the amusement park with Olivia to conduct further studies. Meanwhile, the girl
				Lola fought with becomes obsessed with stopping her cancelation at the hands of the Goth girl. She embarks
				on an escalating tit-for-tat conflict with Lola, determined to get revenge on Lola for humiliating her party.
			</p>
			<p>
				A bloody, haunted night awaits Lola and all those around her.
			</p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
				6 <a className="text-gold font-bold underline underline-offset-2" href="https://a.co/d/hlZA2X3" target="_blank">We Living Failures:</a> J.R. Santos Portuguese author of stories such as Azul, You Will Want Me and others strange
				tales of terror presents his second book of short stories.
			</p>
			<p>
				A trader of toys. A creature described in a missing child's diary. Babes of questionable parentage, and a
				boy who dreams of killing his abusive father. Ten tales that challenge expectations and unsettle the unaware.
			</p>
			<p>
				Includes Toadie, debuted in the Lunatic's Radio Hour podcast, and updated for this collection.
			</p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
				7 <a className="text-gold font-bold underline underline-offset-2" href="https://www.amazon.com/Fracture-Shackles-Obsidian-Mist-Book-ebook/dp/B0CW29JWW4/" target="_blank">The Fracture of Shackles:</a> When forced in a war that isn't his, how can an enslaved nobleman combine honour and
				survival?
			</p>
			<p>
				Captured by pirates at sea, Valirian, a young nobleman from the kingdom of Vinmara, is sold into slavery
				to the empire of Koresh, his people's sworn enemy. He comes into the service of Alexar, a powerful
				and influential Koreshian general, whose designs for the young man are as obscure as they are an ill omen.
			</p>
			<p>
				But war is near, for the Emperor of Koresh, a centuries-old and powerful sorcerer named Tarasmir, plans to
				unleash his legions to conquer new land. Forced to adapt to a hostile environment, Valirian comes to learn
				the price he must pay to stay alive. As war takes him far away from home, he will be forced to make a
				choice-one that may cost him his life.
			</p>
			<p>
				Fate is a cruel mistress in love with irony. Will Valirian find redemption, or are some doomed to repeat
				the same mistakes until the very end?
			</p>
			<p>
				Delve into the themes of morality, guilt, and forgiveness in this coming of age story, and embark on this
				this literary journey of complex relationships, mysterious powers, and struggle for survival.
			</p>
            <div className="text-right font-cursive text-dark-silver text-xl pr-12 pt-4">
                &nbsp;<span
                className="text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block">C</span>harles
                R. <span
                className="text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block">B</span>urgundy&nbsp;
            </div>
            <div className="w-3/5 m-auto">
                <img src={Clover2} alt="Lucky Seven Indie Author"/>
            </div>
        </div>
        <div className="text-justify tracking-wide">
            <div className="w-full justify-center py-8">
                <div className="w-2/5 m-auto">
                    <img src={separator} alt="---"/>
                </div>
            </div>
            <h2 className="text-center text-xl pb-1">A Return from a short break.</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 20th of March 2024</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                I took some days off to allow myself to breathe a little bit, and make sure that I return to my
                writing with a refreshed mind. Without spoiling anything, as I am sure some who will read this news
                have yet to read <NavLink className="text-gold font-bold underline underline-offset-2" to="/book-1">my first book</NavLink>, I want to ensure that the second part of the trilogy lives up to my,
				and your, expectations.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                There were a few details that still irked me in this current draft, but I believe this break brought
                me the much-needed new perspective. So, onto the next draft! I would like to also take a moment to
				thank those of you who have taken the time to give me your feedback. Hearing that people are enjoying
				my work is incredibly gratifying!
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                To finish this quick post, I will just make the announcement of an announcement. Something quite
				exciting is coming this Friday, so stay tuned!
            </p>
            <div className="text-right font-cursive text-dark-silver text-xl pr-12 pt-4">
                &nbsp;<span
                className="text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block">C</span>harles
                R. <span
                className="text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block">B</span>urgundy&nbsp;
            </div>
        </div>
        <div className="text-justify tracking-wide">
            <div className="w-full justify-center py-8">
                <div className="w-2/5 m-auto">
                    <img src={separator} alt="---"/>
                </div>
            </div>
            <h2 className="text-center text-xl pb-1">The book is published! What now?</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 27th of February 2024</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                As you might have seen on social media, the 24th of February was the big day! I am satisfied with
                how publication day went, and beyond a minor issue with the formatting of the description on some 
                websites being a little messed up, everything was rather smooth (and that detail should be fixed now).
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                A fair question to ask is: what now? On my end, you can imagine that I was not simply sitting idly,
                waiting (im)patiently for the 24th. I don’t have a date yet, and it will certainly be quite some months
				before I do, but book 2 is coming along nicely. There are just a few rough edges I wish to smooth out.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                In the mean time, I will catch you on all my social media! <a className="text-gold font-bold underline underline-offset-2" href="https://mailchi.mp/6edfaed1f036/charles-r-burgundy" target="_blank">I also have a newsletter you can
                subscribe to</a>, if you want to receive news that way, alongside a privileged inside look.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                Lastly, if you want to help me out and support me, the best ways will always be to leave reviews
                online, and to talk about my work to those around you.
            </p>
            <div className="text-right font-cursive text-dark-silver text-xl pr-12 pt-4">
                &nbsp;<span
                className="text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block">C</span>harles
                R. <span
                className="text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block">B</span>urgundy&nbsp;
            </div>
        </div>
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