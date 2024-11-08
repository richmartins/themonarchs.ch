interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
    return (
        <div className="text-center w-full mt-12 mt-15">
            <h1
                className="text-4xl font-bold text-[#d5a948] uppercase"
            >
                {title}
            </h1>
            <hr className="border-[#f2e5c8] border-4 w-full my-8" />
        </div>
    );
};


export default SectionTitle;