import logo from "@assets/logo.png";

const Footer = () => {
    return (
        <footer
            className="flex justify-evenly items-center py-9 h-16 bg-black text-[#d5a948]"
        >
            <img src={logo} alt="lgo" className="h-16" />
            <p>THE MONARCHS © 2024 TOUS DROITS RESERVER</p>
            <span>
                <h1 className="text-xl font-bold">CONTACTS</h1>
                <a className="hover:cursor-pointer" href="mailto:contact.themonarchs@gmail.com">contact.themonarchs@gmail.com</a>
            </span>
        </footer>
    );
};

export default Footer;