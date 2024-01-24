import separator from '/separator.svg';

export default function Volume2() {
    return (<>
        <p className={`font-cursive text-dark-silver text-xl lg:text-2xl 2xl:text-3xl 2xl:pb-4`}>
            &nbsp;<span
            className={`text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block`}>C</span>harles
            R. <span
            className={`text-3xl lg:text-3xl 2xl:text-4xl translate-y-1 px-0.5 inline-block`}>B</span>urgundy&nbsp;
        </p>
        <p className={`text-xl lg:text-2xl 2xl:text-3xl pt-5 pb-1 font-bold`}>
            The War of Obsidian and Mist
        </p>
        <p className="text-3xl lg:text-4xl 2xl:text-5xl">
            The tome 2
        </p>
        <div className="w-full justify-center py-10">
            <div className="w-2/5 m-auto">
                <img src={separator}/>
            </div>
        </div>
        <p className="pb-6 px-12 font-cursive italic text-2xl first-letter:text-4xl">
            To be release soon
        </p>
        <div className="text-justify tracking-wide 2xl:pb-10">
            <p className="py-2 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                Shorter, more talking about progress, etc.
            </p>
        </div>
    </>);
}