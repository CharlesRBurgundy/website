import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram } from '@mdi/js';
import { ThemeContext } from "./App.jsx";
import { useContext } from "react";

export default function Contact() {
    const {secondaryColor} = useContext(ThemeContext);

    return (<>
        <p className="text-3xl lg:text-4xl 2xl:text-5xl py-8 2xl:py-12">
            Please Hesitate
        </p>
        <div className="text-justify tracking-wide 2xl:pb-4">
            <p className={`py-1 first-letter:text-6xl first-letter:text-${secondaryColor} first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3`}>
                Pellentesque rhoncus magna felis, non aliquet nulla sollicitudin porttitor. Curabitur accumsan luctus
                efficitur. Nam vestibulum nulla eros, mollis aliquam mauris consequat nec. In non enim in sem ultrices
                pharetra. Morbi a sapien vulputate nisl condimentum ornare. Duis blandit diam ipsum, maximus
                sollicitudin risus vestibulum id.
            </p>
            <div className="flex flex-row p-10">
                <div className="basis-1/3 text-center">
                    <div className="inline-block">
                        <Icon path={mdiInstagram} size={2} />
                    </div>
                </div>
                <div className="basis-1/3 text-center">
                    <div className="inline-block">
                        <Icon path={mdiFacebook} size={2} />
                    </div>
                </div>
                <div className="basis-1/3 text-center">
                    <div className="inline-block scale-[1.7] py-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                            <g>
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#D0D0D0"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </>);
}