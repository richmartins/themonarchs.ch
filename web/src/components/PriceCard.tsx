interface PriceCardProps {
    price: string;
    title: string;
    features: string[];
    description: string;
    nbOfUsers: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
    price,
    title,
    features,
    description,
    nbOfUsers,
}) => {
    return (
        <div className="bg-[#f2e5c8] text-[#d5a948] w-full md:w-[30%] m-2 px-4 pt-4 rounded flex flex-col self-stretch break-all ...">
            <h1 className="text-2xl font-semibold uppercase">{title}</h1>
            <p>{description}</p>
            <h1 className="text-2xl font-semibold uppercase my-4">Dès {price}</h1>
            <ul
                className="list-disc list-inside"
            >
                {features.map((feature, index) => (
                    <li
                        key={index}
                    >{feature}</li>
                ))}
            </ul>
            <p
                className="my-4"
            >{nbOfUsers}</p>
            <div className="flex-grow"></div>
            <a
                className="bg-[#d5a948] text-white py-4 px-4 mb-4 rounded uppercase text-center"
                href={`mailto:contact.themonarchs@gmail.com?subject=Demande de réservation pour une offre ${title}`}
            >
                Réserver
            </a>
        </div>
    );
};

export default PriceCard;
