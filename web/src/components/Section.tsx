import React, { ReactNode } from "react";

interface SectionProps {
    id: string;
    className?: string;
    children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children, className="" }) => {
    return (
        <section className={`md:min-h-[100svh] pb-5 flex flex-col items-center w-full justify-center ${className}`} id={id}>
            {children}
        </section>
    );
};

export default Section;
