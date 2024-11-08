import React, { ReactNode } from "react";

interface SectionProps {
    id: string;
    children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
    return (
        <section className="md:min-h-[100svh] py-5" id={id}>
            {children}
        </section>
    );
};

export default Section;
