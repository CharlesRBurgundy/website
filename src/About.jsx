export default function About() {
    return (<>
        <div className="text-justify tracking-wide py-4">
            <p className="py-1 first-letter:text-2xl first-letter:text-gold first-letter:font-bold italic">
                Nam auctor massa at libero fringilla, vel vulputate ante pretium. Sed orci diam, elementum id lorem vel,
                consectetur aliquet urna. In hac habitasse platea dictumst.
            </p>
        </div>
        <p className="font-cursive text-2xl lg:text-3xl 2xl:text-4xl 2xl:pb-4
                            underline decoration-2 2xl:decoration-3 decoration-gold">
            &nbsp;<span
            className="text-gold text-3xl lg:text-4xl 2xl:text-5xl translate-y-1 px-0.5 inline-block">C</span>harles
            R. <span
            className="text-gold text-3xl lg:text-4xl 2xl:text-5xl translate-y-1 px-0.5 inline-block">B</span>urgundy&nbsp;
        </p>
        <div className="text-justify tracking-wide 2xl:pb-10">
            <p className="py-1 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique ante est, vitae
                efficitur turpis sagittis quis. Maecenas bibendum auctor porttitor. Proin pulvinar purus a tortor
                lobortis, sed faucibus nunc pretium. In vitae est semper, consequat orci quis, placerat orci. In hac
                habitasse platea dictumst. Suspendisse consequat malesuada nisi ac cursus.
            </p>
            <p className="py-1 first-letter:text-2xl first-letter:text-gold first-letter:font-bold">
                Pellentesque rhoncus magna felis, non
                aliquet nulla sollicitudin porttitor. Curabitur accumsan luctus efficitur. Nam vestibulum nulla eros,
                mollis aliquam mauris consequat nec. In non enim in sem ultrices pharetra. Morbi a sapien vulputate nisl
                condimentum ornare. Duis blandit diam ipsum, maximus sollicitudin risus vestibulum id.
            </p>
        </div>
    </>);
}