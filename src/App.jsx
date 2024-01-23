import ladyImage from '/lady.png';
import smokeL from '/smoke_l.png';
import smokeR from '/smoke_r.png';
import corner from '/corner.svg';
import side from '/side.svg';
import { NavLink } from "react-router-dom";
import { createContext, useState } from "react";

function App({children}) {
    return (
        <>
            <div className="md:fixed w-screen h-screen md:overflow-hidden">
                <div className="fixed -z-10 bottom-0 left-0 w-screen h-screen bg-noise bg-cover"/>
                <div
                    className="hidden md:block fixed z-10 left-0 bottom-0 opacity-80 animate-float-left pointer-events-none">
                    <img src={smokeL}/>
                </div>
                <div
                    className="hidden md:block fixed z-10 right-0 bottom-0 opacity-80 animate-float-right pointer-events-none">
                    <img src={smokeR}/>
                </div>
                <div
                    className="fixed z-15 bottom-0 left-0 w-screen h-screen bg-gradient bg-cover pointer-events-none       "/>
                <div
                    className="relative px-4 py-16 sm:p-8 md:p-12 lg:p-20 lg:pb-12 h-full mx-auto lg:max-w-[1600px] flex">
                    <div className="hidden md:block md:w-2/5 h-full animate-fade">
                        <div
                            className="absolute max-w-[50vw] max-h-[100vh] bottom-0 md:-left-8 lg:-left-16 brightness-0 blur-xl opacity-30">
                            <img src={ladyImage}/>
                        </div>
                        <div className="absolute max-w-[50vw] max-h-[100vh] bottom-0 md:-left-2 lg:-left-4">
                            <img src={ladyImage}/>
                        </div>
                    </div>
                    <div className="md:w-3/5 animate-fade flex flex-col z-20">
                        <div
                            className="relative inline-block bg-dark-grey text-center text-silver font-serif m-6 md:max-h-[70vh] shadow-lg shadow-dark-grey/20">
                            <div className="absolute -top-6 -left-6 corner-tl w-6 h-6"/>
                            <div className="absolute -top-6 -right-6 corner-tr w-6 h-6"/>
                            <div className="absolute -bottom-6 -left-6 corner-bl w-6 h-6"/>
                            <div className="absolute -bottom-6 -right-6 corner-br w-6 h-6"/>
                            <div className="absolute top-0 -left-6 bg-left w-6 h-full"/>
                            <div className="absolute -top-6 left-0 bg-top w-full h-6"/>
                            <div className="absolute top-0 -right-6 bg-right w-6 h-full"/>
                            <div className="absolute -bottom-6 left-0 bg-bottom w-full h-6"/>

                            <div className="h-full flex flex-col">
                                <div className="grow-0 py-4 lg:py-6 text-lg">
                                    <div>
                                        <div
                                            className="inline-block px-2 lg:px-5 leading-5 align-text-bottom rotate-180">&#10170;</div>
                                        <NavLink to="/"
                                                 className={({isActive}) => isActive ? `underline decoration-2 2xl:decoration-3 decoration-gold` : ""}>
                                            Home
                                        </NavLink>
                                        <div className="inline-block px-2 lg:px-5">&#9866;</div>
                                        <NavLink to="/the-fracture-of-shackles"
                                                 className={({isActive}) => isActive ? `underline decoration-2 2xl:decoration-3 decoration-gold` : ""}>
                                            Book 1
                                        </NavLink>
                                        <div className="inline-block px-2 lg:px-5">&#9866;</div>
                                        <NavLink to="/about"
                                                 className={({isActive}) => isActive ? `underline decoration-2 2xl:decoration-3 decoration-gold` : ""}>
                                            About
                                        </NavLink>
                                        <div className="inline-block px-2 lg:px-5">&#9866;</div>
                                        <NavLink to="/contact"
                                                 className={({isActive}) => isActive ? `underline decoration-2 2xl:decoration-3 decoration-gold` : ""}>
                                            Contact
                                        </NavLink>
                                        <div
                                            className="inline-block px-2 lg:px-5 leading-5 align-text-bottom">&#10170;</div>
                                    </div>
                                </div>
                                <div className="grow overflow-y-auto">
                                    <div className="p-4 sm:px-12 md:px-8 lg:px-12">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-grow justify-center items-end">
                            <div className="text-center text-silver text-sm py-10 sm:py-2">
                                <div>
                                    <NavLink to="/"
                                             className={({isActive}) => isActive ? "underline" : ""}>Home</NavLink>
                                    <span className="px-5">-</span>
                                    <NavLink to="/about"
                                             className={({isActive}) => isActive ? "underline" : ""}>About</NavLink>
                                    <span className="px-5">-</span>
                                    <NavLink to="/contact"
                                             className={({isActive}) => isActive ? "underline" : ""}>Contact</NavLink>
                                </div>
                                <p>&copy; {(new Date().getFullYear())}, Charles R. Burgundy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden text-dark-green text-dark-brown text-dark-blue text-dark-grey text-dark-silver text-pink text-brown
                            first-letter:text-dark-green first-letter:text-dark-brown first-letter:text-dark-blue first-letter:text-dark-grey
                            first-letter:text-dark-silver first-letter:text-pink first-letter:text-brown
                            decoration-dark-green decoration-dark-brown decoration-dark-blue decoration-dark-grey decoration-dark-silver decoration-pink decoration-brown
                            border-dark-green border-dark-brown border-dark-blue border-dark-grey border-dark-silver border-pink border-brown
                            bg-dark-green bg-dark-brown bg-dark-blue bg-dark-grey bg-dark-silver bg-pink bg-brown"></div>
        </>
    )
}

export default App
