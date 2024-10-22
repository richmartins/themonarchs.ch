import NavBar from "@components/NavBar";
import appLogo from "@assets/logo.png";
import NavBarMobile from "./NavBarMobile";

interface HeaderProps {
    active: string;
    sections: { id: string; title: string }[];
}

const Header: React.FC<HeaderProps> = ({ active, sections }) => {
    return (
        <header className="flex flex-row flex-wrap justify-between items-center sticky top-0 z-9999 w-full bg-black  md:px-24 px-10">
            <a href="/">
                <img src={appLogo} alt="Logo" className=" h-[6em]" />
            </a>
            <NavBar sections={sections} active={active} />
            <NavBarMobile active={active} sections={sections} />
        </header>
    );
};

export default Header;
