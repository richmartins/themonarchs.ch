interface AnchorLinkProps {
    href: string;
    children?: any;
    active: boolean;
}

const AnchorLink: React.FC<AnchorLinkProps> = ({ href, children, active }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        
        let navBarHeight = document.querySelector('header')?.clientHeight || 0;

        const element = document.getElementById(href);
        let burgerMenu = document.getElementById('mobile-nav-menu');

        if (element) {
            const yOffset = navBarHeight * -1;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }

        if (burgerMenu) {
            burgerMenu.classList.remove('visible');
            burgerMenu.classList.add('hidden');
        }
    };

    return (
        <a 
            className={`text-[#d5a948] w-full uppercase p-2 font-semibold hover:pointer ${active ? 'underline' : ''} hover:gray-300`}
            href={`#${href}`}
            onClick={handleClick}
        >
            {children}
        </a>
    );
};

export default AnchorLink;
