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
            <h2 className="text-center text-xl pb-1">An update with thankfulness</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 4th of June 2026</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                I have lost count of how many pages I have written in the past months. I may have gotten so absorbed
				in my writing that I forgot to even share any news here, but let me assure you, it is all good news.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                It's honestly been too long since I last shared some news. Truth be told, there is quite a lot I've
				been handling behind the scenes (and also in things unrelated to my art), but I have made some good
				progress on the second draft of <span className="text-gold font-bold">The Lion of Obsidian</span> in spite of all that—I am just shy of half-way
				done.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                To conclude on the progress report, a little while ago I had hoped to be able to publish it this summer
				of 2026, but that's clearly not going to be possible. The second half still needs a bit of work before
				I take the book to editing, but I still intend to have the release date be this year. I'll keep you
				all updated as things become clearer.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                But more importantly, I would like to take a moment to say thank you for the recent wave of support
				I have received, notably on my Amazon page where I have gotten several reviews, many of which actually
				had some really interesting feedback. It's funny to see how much I think I have improved, both in my
				writing style and in the tiny details of plot-writing, over the years and since I first published
				<span className="text-gold font-bold">The Fracture of Shackles</span>. I think I will be able to bring this trilogy to an amazing conclusion,
				and in my opinion, I've outdone myself with <span className="text-gold font-bold">The Lion of Obsidian</span>, in every regard. I intend to turn
				what is a very solid first draft into an incredible final result.
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
            <h2 className="text-center text-xl pb-1">Some Christmas Cheers!</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 22nd of December 2025</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                I have lost count of how many pages I have written in the past months. I may have gotten so absorbed
				in my writing that I forgot to even share any news here, but let me assure you, it is all good news.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                The very first thing I want to proudly announce is that I have finished the first draft of <span className="text-gold font-bold">The Lion of Obsidian</span>.
				It is still a little flawed, thus I will need to write at least another draft or two, but I am very
				happy with hte direction of the story so far. I think it will absolutely be my best book. It is a
				little longer, though only barely, than <span className="text-gold font-bold">A Home of Mist</span>,
				and the final version will likely be near the 120.000 words mark, or about 450 pages.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                There is another really positive thing I wish to share, though I shall spare you the backstage details:
				the paperback versions of both The Fracture of Shackles and A Home of Mist will permantently be $2 USD
				cheaper (and I will make more per sale even with those lower prices), so there is no better time to
				get your own copy!
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                I will take a couple of weeks to rest, as the past few days were the most productive I've ever been,
				and I feel a touch exhausted. I will return soon with more information on what comes next.
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
            <h2 className="text-center text-xl pb-1">In Remembrance of an Old Companion</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 2nd of September 2025</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                Hello everyone! This has been a rather eventful summer, and I think it's time that I share some news, and also update
				everyone on the progress I've made. There has been one rather unfortunate event which—allow me to immediately reassure
				you—is thankfully nothing of massive consequence.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                In fact, I might as well start with this little story: the PC I have had for about eleven years valiantly fought to
				the bitter end, by my side through thick and thin, but sadly, it has met its end in the last week of July. This meant
				that I could not get any work done for a couple of weeks before I got a new one. Thankfully, none of the disks were
				affected, and thus I lost no data (and besides, I am extremely rigorous with making frequent backups of my work, so
				there was no real risk to begin with).
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                Still, that interruption was quite abrupt, and so as I was already paused in my work, I thought I'd give myself a
				few weeks of rest before I get back to work. So, here we are now: I spent last week dealing with a fair bit of
				paperwork, and now I am back to being fully focused on <span className="text-gold font-bold">The Lion of Obsidian</span>! I will first finish what I started in
				July, which is to say, improving what I had already written in Autumn 2024, before completing the first draft as
				a whole.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                On the fun side of things, I have had to do quite a lot of research for <span className="text-gold font-bold">The Lion of Obsidian</span>, and so I thought it
				would be cool to share some of the interesting historical and cultural facts I have learnt while it is all still
				fresh in my mind. I will make the first post about it soon, so tell me what you think!
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
            <h2 className="text-center text-xl pb-1">Looking back on two amazing months</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 24th of June 2025</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                Quite a lot has happened since I last posted some news, so it is high time I share about what's been going on. First,
				I would like to say thank you to everyone who has gotten a copy of my books! It means the world to me and I hope you
				enjoy. I also wanted to say thank you to those who have taken the time to leave a review, talked about me to friends
				and family, or sent me a DM—including those who shared some constructive criticism—thank you all very much again!
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                It is also important that I reassure you all: I have absolutely not wasted those last two months, and I've made some
				excellent progress towards finishing  <span className="text-gold font-bold">The Lion of Obsidian</span>. Usually June is my worst month of writing (I'll blame the
				summer heat), but this year has been the total opposite. Just last week, I wrote some 14,000 words, which is to say
				some 60 pages.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                Now, where does that leave us with  <span className="text-gold font-bold">The Lion of Obsidian</span>? How much has been written, and what is left to do? Well, I
				am aiming for this third book to be about as long as the other two, so between 90,000 to 120,000 words. So far, I have
				written just shy of 50,000 words, so I'm about half-way done with the first draft. I will of course need to rewrrite
				some parts to get them exactly right (which I've already started doing, as I had a lot of really cool ideas while I was
				editing A Home of Mist earlier this year). It will still be a bit of time before you get a copy in your hands, but I have
				been having a blast writing it all so far, and I think you will have a blast reading it, too!
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                That is all for now! Keep in touch on my social media, and see you next time.
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
            <h2 className="text-center text-xl pb-1">Today is the Day—A Home of Mist is out!</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 19th of April 2025</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                It is with the widest of smiles that I can finally say this: <span className="text-gold font-bold">A Home of Mist</span> is out! As mentioned in my recent post, I
				once again partnered with <a className="text-gold font-bold underline underline-offset-2" href="https://www.artstation.com/alexis-susani" target="_blank">Alexis Susani</a> to create the cover illustration. Be sure to check him out on <a className="text-gold font-bold underline underline-offset-2" href="https://www.instagram.com/alexisusani/" target="_blank">Instagram</a> and
				his other <a className="text-gold font-bold underline underline-offset-2" href="https://linktr.ee/alexisusani" target="_blank">social media</a>!
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                You can get your ebook copy <a className="text-gold font-bold underline underline-offset-2" href="https://books2read.com/u/3kogDR" target="_blank">here</a>! I will update this post and inform everyone as soon as the links to order the paperback version is out—as I understand it,
				it's a matter of hours. Stay tuned! (Update: <a className="text-gold font-bold underline underline-offset-2" href="https://mybook.to/ydJ3FnK" target="_blank">it's here</a>!) 
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                If you haven't grabbed a copy of the Fracture of Shackles, the first book of the trilogy, you may still <a className="text-gold font-bold underline underline-offset-2" href="https://books2read.com/u/m2KaxG" target="_blank">get the eBook</a> for $0.99 until Thursday the 24th of April,
				so be quick!
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
            <h2 className="text-center text-xl pb-1">An Amazing April Beginning</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 5th of April 2025</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                The release of <span className="text-gold font-bold">A Home of Mist</span>. is getting nearer and nearer, and the cover reveal is just around the
				corner! In fact, on the next weekend you will get to see the amazing result, made by the incredibly talented <a className="text-gold font-bold underline underline-offset-2" href="https://www.artstation.com/alexis-susani" target="_blank">Alexis Susani</a>.
				After how well the first cover turned out, working with the same artist was quite a natural decision, and likewise I think you will be quite amazed at the result!
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                And on a similar note, there is another exciting announcement I shall make today: the release date of <span className="text-gold font-bold">A Home of Mist</span> is set for <span className="text-gold font-bold">the 19th of April!</span> Pre-orders 
				will be available soon, and I will notify you all when they are so.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                To celebrate that, the <a className="text-gold font-bold underline underline-offset-2" href="https://books2read.com/u/m2KaxG" target="_blank">eBook for the Fracture of Shackles</a> will be on discount for $0.99 for the next
				two weeks. So if you were hesitant, now is a great time to get your own copy!
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
            <h2 className="text-center text-xl pb-1">And a Happy New Year!</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 24th of January 2025</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                First and foremost, as this is my first post of 2025, happy new year! Coincidentally, this is also the
				anniversary of the very first news ever posted on this website, so I thought I would share some good news.
				I was slightly delayed in making this post, as a pesky, but thankfully rather mild, illness bothered me for
				a good chunk of January. Regardless, onto what I have to share!
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                As you might have heard, my second book and second part of the War of Obsidian and Mist trilogy, <span className="text-gold font-bold">A Home of Mist</span>,
				is nearly done, and by that I mean that it is going through the final phases of edition. Release is not so far,
				and my original plan to have the release day be somewhere in April 2025 has not changed. In the mean time,
				I have updated <NavLink className="text-gold font-bold underline underline-offset-2" to="/book-2">the page on my website about book 2</NavLink>, adding some more information (while avoiding spoilers
				about both books 1 and 2, of course), so feel free to check it out!
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                I will spend a few lines, too, to talk about book 3, because time does truly fly, and I do not want anyone
				to have to wait too long before book 3 comes out. I'm about half-way done with the first draft, which is
				admittedly just a little below my origial goal of two-thirds done by this month, but certainly not any massive
				delay. Progress has been good, but I do want to deliver a very compelling end to this trilogy (especially as I
				believe endings to be an incredibly important part of a story), so I will focus on getting the exact tone,
				nuances, and conclusions that fit the story over blindly meeting a deadline that would be set in 2026.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                With all that said, some things are on the way for March, leading up to the release of A Home of Mist.
				I will talk about them in greater details in the second half of March!
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
            <h2 className="text-center text-xl pb-1">First Announcement, Second Novel</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 4th of November 2024</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                I am delighted to be finally able to make this announcement: my editor and I have set the dates for
                the edition of my second novel and second part of the War of Obsidian and Mist trilogy: <span className="text-gold font-bold">A Home of Mist</span>.
                I wanted to be absolutely certain there would be no issues before I made this announcement, as there
                had been delays (though they were related to personal matters that are now mostly solved).
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                I can therefore share that <span className="text-gold font-bold">A Home of Mist</span> is set to come out during April 2025!
				Of course, when the time comes, I will share with you the exact release date, the pre-order links, etc.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                Now is a good time to follow me on social media. I have a few teasers that will arrive on the way.
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
            <h2 className="text-center text-xl pb-1">Long-Awaited</h2>
            <div className="text-center text-dark-silver font-cursive text-xl pb-4">The 24th of June 2024</div>
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                Quite some time has passed since I last wrote some news. Admittedly, it has been a bit longer than I
                originally wished, but the main reason is that I preferred focusing alo of my attention on writing,
                and bring news of significant progress, rather than sharing every step, including the little bumps
                on the road, and risk frustration (on both my and your end).
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                So, what news do I bring, you may ask? Well, book 2 of the War of Obsidian and Mist, <span className="text-gold font-bold">"A Home of Mist"</span>,
                is now finished. Almost. On my end, I've reached a satisfying point, where the story is good and with
				the right nuances. It still needs to be edited, the cover needs to be done, etc., but the majority of
				the work is done. It is still too early to give an exact publishing date, but I am aiming for early 2025.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:font-bold">
                You may take this as the first official announcement, however! Book 2 i not that far away, and I have
				also been working on a side project, though I will say no more about it right now. Stay tuned!
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