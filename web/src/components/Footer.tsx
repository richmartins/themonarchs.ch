import logo from "@assets/logo.png";

const Footer = () => {
    return (
        <footer
            className="flex md:justify-evenly flex-col md:flex-row items-center md:py-9 md:h-16 bg-black text-[#d5a948]"
        >
            <img src={logo} alt="lgo" className="h-16" />
            <p className="text-center py-2">THE MONARCHS © 2024 TOUS DROITS RESERVER</p>
            <span className="text-center md:text-normal">
                <h1 className="text-xl font-bold">CONTACTS</h1>
                <a className="hover:cursor-pointer" href="mailto:contact.themonarchs@gmail.com">contact.themonarchs@gmail.com</a>
            </span>
        </footer>
    );
};

export default Footer;