import AnchorLink from "@components/AnchorLink";
import { useState } from "react";

interface NavBarMobileProps {
    active: string;
    sections: { id: string; title: string }[];
}

const NavBarMobile: React.FC<NavBarMobileProps> = ({ active, sections }) => {
    const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);

    return (
        <>
            <div className="lg:hidden flex flex-col z-50 items-center justify-between hover:cursor-pointer" onClick={() => {setToggleBurgerMenu(!toggleBurgerMenu)}}>
                <div className="w-8 h-1 bg-[#d5a948]"></div>
                <div className="w-8 my-1 h-1 bg-[#d5a948]"></div>
                <div className="w-8 h-1 bg-[#d5a948]"></div>
            </div>
            <ul
                id="mobile-nav-menu"
                className={`flex flex-col items-center justify-between text-center ${
                    toggleBurgerMenu ? "visible" : "hidden"
                } w-full bg-black mt-2 flex-grow-1`}
            >
                {sections.map((section) => (
                        <AnchorLink
                            key={section.id}
                            href={section.id}
                            active={active === section.id}
                        >
                            <li key={section.id} className="w-full my-2">
                            {section.title}
                            </li>
                        </AnchorLink>
                ))}
            </ul>
        </>
    );
};

export default NavBarMobile;
