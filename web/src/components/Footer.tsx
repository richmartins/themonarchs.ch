import logo from "@assets/logo.png";

const Footer = () => {
    return (
        <footer
            className="flex md:justify-evenly py-5 px-14 md:px-0 flex-col md:flex-row items-center md:py-9 md:h-16 bg-black text-[#d5a948]"
        >
            <img src={logo} alt="lgo" className="h-16" />
            <p className="text-center py-2 uppercase">THE MONARCHS © 2024 TOUS DROITS RESERVées</p>
            <span className="text-center md:text-normal">
                <h1 className="text-xl font-bold">CONTACT</h1>
                <a className="hover:cursor-pointer" href="mailto:contact.themonarchs@gmail.com">contact.themonarchs@gmail.com</a>
            </span>
        </footer>
    );
};

export default Footer;