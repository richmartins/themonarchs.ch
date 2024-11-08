import AnchorLink from '@components/AnchorLink';

interface NavBarProps {
    active: string;
    sections: { id: string; title: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ active, sections }) => {

    return (
        <nav className="flex flex-">
            <ul className='hidden lg:flex flex-row justify-between'>
                {sections.map((section) => (
                    <li key={section.id}>
                        <AnchorLink 
                            href={section.id} active={active === section.id}
                        >
                            {section.title}
                        </AnchorLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
