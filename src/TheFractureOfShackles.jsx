import separator from '/separator_1.svg';

export default function TheFractureOfShackles() {
    return (<>
        <p className="font-cursive text-2xl lg:text-3xl 2xl:text-4xl 2xl:pb-4">
            &nbsp;<span
            className="text-3xl lg:text-4xl 2xl:text-5xl translate-y-1 px-0.5 inline-block">C</span>harles
            R. <span
            className="text-3xl lg:text-4xl 2xl:text-5xl translate-y-1 px-0.5 inline-block">B</span>urgundy&nbsp;
        </p>
        <p className="text-xl lg:text-2xl 2xl:text-3xl pt-5 font-bold">
            The War of Obsidian and Mist
        </p>
        <p className="text-3xl lg:text-4xl 2xl:text-5xl pb-2">
            The Fracture of Shackles
        </p>
        <div className="w-full justify-center pb-8 2xl:pb-12">
            <div className="w-1/2 m-auto">
                <img src={separator}/>
            </div>
        </div>
        <p className="pb-6 px-12 font-cursive italic text-2xl first-letter:text-4xl">
            When forced in a war that isn't his, how can an enslaved nobleman combine honour and survival ?
        </p>
        <div className="text-justify tracking-wide 2xl:pb-10">
            <p className="py-1 first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
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
            <div className="text-center my-4">
                <div className="inline-block bg-gold px-4 py-2 rounded-lg font-bold text-lg">Get Your Copy of The Fracture of Shackles</div>
            </div>
        </div>
        <p className="text-justify text-xl lg:text-2xl 2xl:text-3xl pt-5 font-bold">
            A Quick Glance
        </p>
        <div className="text-justify tracking-wide 2xl:pb-10">
            <p className="py-1">
                <b>Series Title:</b> The War of Obsidian and Mist<br/>
                <b>Book Title:</b> The Fracture of Shackles<br/>
                <b>Genre:</b> Epic fantasy<br/>
                <b>Age Category:</b> Adult<br/>
                <b>Formats:</b> Paperback and ebook<br/>
            </p>
        </div>
    </>);
}