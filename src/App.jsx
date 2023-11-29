import ladyImage from '/lady.png';
import { NavLink } from "react-router-dom";
import { createContext, useState } from "react";


export const ThemeContext = createContext('dark-green');

function App({children}) {
    const [secondaryColor, setSecondaryColor] = useState('dark-green');
    const [border, setBorder] = useState(false);

    return (
        <ThemeContext.Provider value={{secondaryColor, border}}>
            <div className="fixed w-screen h-screen overflow-hidden bg-dark-purple">
                <div className="absolute top-1 left-1 p-2 z-20 text-xs text-center">
                    <div className="inline-block px-1 text-dark-green" onClick={() => setSecondaryColor('dark-green')}>green</div>
                    <div className="inline-block px-1 text-dark-blue" onClick={() => setSecondaryColor('dark-blue')}>blue</div>
                    <div className="inline-block px-1 text-brown" onClick={() => setSecondaryColor('brown')}>brown</div>
                    <div className="inline-block px-1 text-pink" onClick={() => setSecondaryColor('pink')}>pink</div>
                    <div className="inline-block px-1 text-dark-silver" onClick={() => setSecondaryColor('dark-silver')}>grey</div>
                    <div className={`text-silver decoration-3 ${border ? '' : 'line-through'}`} onClick={() => setBorder(!border)}>border</div>
                </div>
                <div className="absolute -z-10 bottom-0 left-0 w-screen h-screen bg-noise bg-cover opacity-70" />
                <div className="absolute -z-10 bottom-0 left-0 w-screen h-screen bg-gradient bg-cover opacity-70" />
                <div className="relative p-4 sm:p-8 md:p-12 lg:p-20 lg:pb-12 h-full mx-auto lg:max-w-[1600px] flex">
                    <div className="hidden md:block md:w-2/5 h-full animate-fade">
                        <div className="absolute max-w-[50vw] max-h-[100vh] bottom-0 md:-left-8 lg:-left-16 brightness-0 blur-xl opacity-30">
                            <img src={ladyImage} />
                        </div>
                        <div className="absolute max-w-[50vw] max-h-[100vh] bottom-0 md:-left-2 lg:-left-4 grayscale hover:grayscale-0">
                            <img src={ladyImage} />
                        </div>
                    </div>
                    <div className="md:w-3/5 animate-fade flex flex-col">
                        <div className={`relative inline-block bg-dark-grey text-center text-silver font-serif
                                        p-4 sm:p-12 md:p-8 lg:p-12 max-h-[70vh] shadow-lg shadow-dark-grey/20
                                        ${border?`border-2 border-${secondaryColor}`:''}`}>
                            {border && (
                                <div className={`absolute -top-2 left-1/2 -ml-2 rotate-45 w-4 h-4 bg-${secondaryColor}`}>&nbsp;</div>
                            )}
                            <div className="pb-2 lg:pb-2 text-lg">
                                <p>
                                    <div className={`inline-block text-${secondaryColor} px-5 leading-5 align-text-bottom rotate-180`}>&#10170;</div>
                                    <NavLink to="/" className={({ isActive}) => isActive ? `underline decoration-2 2xl:decoration-3 decoration-${secondaryColor}` : ""}>
                                        Home
                                    </NavLink >
                                    <div className={`inline-block text-${secondaryColor} px-5`}>&#9866;</div>
                                    <NavLink to="/about" className={({ isActive}) => isActive ? `underline decoration-2 2xl:decoration-3 decoration-${secondaryColor}` : ""}>
                                        About
                                    </NavLink >
                                    <div className={`inline-block text-${secondaryColor} px-5`}>&#9866;</div>
                                    <NavLink to="/contact" className={({ isActive}) => isActive ? `underline decoration-2 2xl:decoration-3 decoration-${secondaryColor}` : ""}>
                                        Contact
                                    </NavLink >
                                    <div className={`inline-block text-${secondaryColor} px-5 leading-5 align-text-bottom`}>&#10170;</div>
                                </p>
                            </div>
                            <div className="h-full overflow-y-auto">
                                {children}
                            </div>
                        </div>
                        <div className="flex flex-grow justify-center items-end">
                            <div className="text-center text-silver text-sm">
                                <p>
                                    <NavLink to="/" className={({isActive}) => isActive ? "underline" : ""}>Home</NavLink>
                                    <span className="px-5">-</span>
                                    <NavLink to="/about" className={({isActive}) => isActive ? "underline" : ""}>About</NavLink>
                                    <span className="px-5">-</span>
                                    <NavLink to="/contact" className={({isActive}) => isActive ? "underline" : ""}>Contact</NavLink>
                                </p>
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
        </ThemeContext.Provider>
    )
}

export default App
