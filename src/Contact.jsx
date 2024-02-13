import {  useEffect, useState } from "react";
import Icon from '@mdi/react';
import { mdiFacebook, mdiInstagram } from '@mdi/js';
import separator from '/separator.svg';

export default function Contact() {
    const [displayEmail, setDisplayEmail] = useState(false);

    useEffect(() => {
        document.title = "Charles R. Burgundy - Contact";
    }, []);
    return (<>
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl">
            Contact
        </h1>
        <div className="w-full justify-center py-8">
            <div className="w-2/5 m-auto">
                <img src={separator} alt="---"/>
            </div>
        </div>
        <div className="text-justify tracking-wide 2xl:pb-4">
            <p className="py-1 first-letter:text-6xl first-letter:text-gold first-letter:font-bold first-letter:float-left first-letter:pr-1 first-letter:-mt-3 pb-4">
                I always appreciate hearing from my fans! If you'd like to reach out, feel free to connect with me
                through my social media channels. Your messages and support truly brighten my day, and I'm excited to
                engage with you there!
            </p>
            <div className="flex flex-row gap-8 justify-center">
                <div className="text-center">
                    <a
                        href="https://www.instagram.com/charlesrburgundy/"
                        target="_blank"
                        className="inline-block"
                    >
                        <Icon path={mdiInstagram} size={2}/>
                    </a>
                </div>
                <div className="text-center">
                    <a
                        href="https://www.facebook.com/profile.php?id=61556143042288"
                        target="_blank"
                        className="inline-block"
                    >
                        <Icon path={mdiFacebook} size={2}/>
                    </a>
                </div>
                <div className="text-center w-12">
                    <a
                        href="https://twitter.com/C_R_Burgundy"
                        target="_blank"
                        className="inline-block scale-[1.7] py-3"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                            <g>
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    fill="#D0D0D0"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="text-center pt-8 pb-2">
                For business inquiries, see the email below.<br />
                {!displayEmail && (
                    <div
                        className="inline-block bg-gold px-4 py-2 rounded-lg font-bold text-lg my-2"
                        onClick={()=>setDisplayEmail(!displayEmail)}
                    >
                        Display email
                    </div>
                )}
                {displayEmail && <div className="my-2 text-lg font-bold underline tracking-wider">charl<span className="hidden">esrbu</span>esrburgundy@g<span className="hidden">email</span>mail.com</div>}
            </div>
        </div>
    </>);
}