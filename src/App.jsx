import queen from '/queen.png';
import author from '/author.png';
import smokeL from '/smoke_l.png';
import smokeR from '/smoke_r.png';
import smokeRedL from '/smoke_red_l.png';
import smokeRedR from '/smoke_red_r.png';
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import ReactGA from "react-ga4";

ReactGA.initialize("G-MGWP292NGZ");
function App({children}) {
    const location = useLocation();
    const about = useMemo(() => location.pathname === '/about', [location]);
    const isBookPage = useMemo(() =>
            location.pathname === '/volume-1' ||
            location.pathname === '/volume-2'
        , [location]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (about) {
            document.body.classList.add('about');
        } else {
            document.body.classList.remove('about');
        }
        setMenuOpen(false);
        ReactGA.send({hitType: "pageview", page: location});
    }, [location, about]);
    return (
        <>
            <div className="w-screen h-screen md:fixed md:overflow-hidden">
                <div className="fixed -z-10 max-sm:top-0 md:bottom-0 left-0 w-full h-full md:w-screen md:h-screen bg-noise bg-cover"/>
                <div
                    className="hidden md:block fixed z-10 left-0 bottom-0 opacity-80 animate-float-left pointer-events-none">
                    {!about && <img src={smokeL} alt="smoke"/>}
                    {about && <img src={smokeRedL} alt="smoke"/>}
                </div>
                <div
                    className="hidden md:block fixed z-10 right-0 bottom-0 opacity-80 animate-float-right pointer-events-none">
                    {!about && <img src={smokeR} alt="smoke"/>}
                    {about && <img src={smokeRedR} alt="smoke"/>}
                </div>
                <div
                    className="fixed z-15 max-sm:top-0 md:bottom-0 left-0 w-full h-full md:w-screen md:h-screen bg-gradient bg-cover pointer-events-none"/>
                <div
                    className="relative px-4 py-16 sm:p-8 md:p-12 lg:p-20 lg:pb-12 h-full mx-auto lg:max-w-[1600px] flex">
                    <div className="hidden md:block md:w-2/5 h-full">
                        <div
                            className="absolute max-w-[50vw] max-h-[100vh] bottom-0 md:-left-8 lg:-left-16 brightness-0 blur-xl opacity-30">
                            {!about && <img className="animate-fade" src={queen} alt="shadow"/>}
                            {about &&
                                <img className="animate-fade" src={author} alt="shadow"/>}
                        </div>
                        <div className="absolute max-w-[50vw] max-h-[100vh] bottom-0 md:-left-2 lg:-left-4">
                            {!about && <img className="animate-fade" src={queen} alt="queen"/>}
                            {about &&
                                <img className="animate-fade" src={author} alt="author"/>}
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 animate-fade flex flex-col z-20">
                        <div
                            className={`relative inline-block bg-dark-grey text-center text-silver font-serif m-6 md:max-h-[74vh] 
                                        ${about ? 'shadow-[0_0_140px_rgba(185,38,28,0.33)]' : 'shadow-[0_0_140px_rgba(212,149,224,0.33)]'}`}>
                            <div className="absolute -top-6 -left-6 corner-tl w-6 h-6"/>
                            <div className="absolute -top-6 -right-6 corner-tr w-6 h-6"/>
                            <div className="absolute -bottom-6 -left-6 corner-bl w-6 h-6"/>
                            <div className="absolute -bottom-6 -right-6 corner-br w-6 h-6"/>
                            <div className="absolute top-0 -left-6 bg-left w-6 h-full"/>
                            <div className="absolute -top-6 left-0 bg-top w-full h-6"/>
                            <div className="absolute top-0 -right-6 bg-right w-6 h-full"/>
                            <div className="absolute -bottom-6 left-0 bg-bottom w-full h-6"/>

                            <div className="h-full flex flex-col pb-4">
                                <div className="grow-0 py-6 lg:py-8 text-lg">
                                    <div className="flex flex-row gap-2 md:gap-8 justify-center">
                                        <NavLink to="/"
                                                 className={({isActive}) => `px-5 pt-0.5 pb-1.5 mb-0.5 rounded ${isActive ? 'bg-gold' : 'bg-light-grey'}`}>
                                            Home
                                        </NavLink>
                                        <div className="py-1 text-dark-silver">◆</div>
                                        <div>
                                            <div
                                                className={`px-5 pt-0.5 pb-1.5 rounded mb-0.5 ${isBookPage ? 'bg-gold' : 'bg-light-grey'} ${menuOpen ? 'rounded-b-none' : ''}`}
                                                onClick={() => setMenuOpen(!menuOpen)}
                                            >
                                                Books
                                            </div>
                                            {menuOpen && <div className="absolute flex flex-col text-left z-10">
                                                <NavLink to="/volume-1"
                                                         className={({isActive}) => `px-5 py-1.5 mb-0.5 rounded-tr ${isActive ? 'bg-gold' : 'bg-light-grey'}`}>
                                                    Book 1 - The Fracture of Shackles
                                                </NavLink>
                                                <NavLink to="/volume-2"
                                                         className={({isActive}) => `px-5 py-1.5 rounded-b ${isActive ? 'bg-gold' : 'bg-light-grey'}`}>
                                                    Book 2
                                                </NavLink>
                                            </div>
                                            }
                                        </div>
                                        <div className="py-1 text-dark-silver">◆</div>
                                        <NavLink to="/about"
                                                 className={({isActive}) => `px-5 pt-0.5 pb-1.5 mb-0.5 rounded ${isActive ? 'bg-gold' : 'bg-light-grey'}`}>
                                            About
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="grow md:overflow-y-scroll">
                                    <div className="py-4 md:px-4 sm:px-12 md:px-8 lg:px-12">
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
                                    <NavLink to="/contact"
                                             className={({isActive}) => isActive ? "underline" : ""}>Contact</NavLink>
                                </div>
                                <p>&copy; {(new Date().getFullYear())}, Charles R. Burgundy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
