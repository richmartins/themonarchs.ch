import { useState, useEffect } from "react";

import introVideo from "@assets/video-intro.mp4";
import aboutImg from "@assets/about.jpeg";
import serviceImg from "@assets/services.jpeg";
import sponsor1 from "@assets/sponsor1.png";
import sponsor2 from "@assets/sponsor2.png";
import sponsor3 from "@assets/sponsor3.png";

import Header from "@components/Header";
import Section from "@components/Section";
import Footer from "@components/Footer";
import PriceCard from "@components/PriceCard";
import SectionTitle from "@components/SectionTitle";

import "./App.css";

const sections = [
    { id: "home", title: "Accueil" },
    { id: "about", title: "Qui sommes nous" },
    { id: "services", title: "Nos Services" },
    { id: "partners", title: "Nos partenaires" },
    { id: "prices", title: "Nos offres" },
];

const offers = [
    {
        title: "Emeraude",
        description: "Parfait pour une soirée",
        price: "1250.-",
        features: ["3 cocktails", "1 mocktail", "Eau plate, gazeuse"],
        nbOfUsers: "25 personnes max",
    },
    {
        title: "Rubis",
        description: "Parfait pour un anniversaire",
        price: "1750.-",
        features: ["4 cocktails", "2 mocktail", "Eau plate, gazeuse"],
        nbOfUsers: "35 personnes max",
    },
    {
        title: "Saphir",
        description: "Parfait pour un mariage",
        price: "2100.-",
        features: ["5 cocktails", "3 mocktail", "Eau plate, gazeuse"],
        nbOfUsers: "+35 personnes",
    },
];

function App() {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    const navBarHeight = document.querySelector("header")?.clientHeight || 0;

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                const offsetTop = element.offsetTop - 99; // Adding some buffer for the navbar
                const offsetBottom = offsetTop + element.offsetHeight;

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetBottom
                ) {
                    setActiveSection(section.id);
                    window.history.replaceState(null, "", `#${section.id}`);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full">
            <Header active={activeSection} sections={sections} />
            <main className="md:px-24 sm:px-10">
                <Section id="home" className={`pt-[${navBarHeight + 10}px]`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div className="flex flex-col items-center align-center justify-center h-[50svh] px-14 ">
                            <h1 className="text-4xl font-bold uppercase text-center md:text-left">
                                Un Service Haut de Gamme, pour des Cocktails
                                Exclusifs à Domicile.
                            </h1>
                            <a href="mailto:contact.themonarchs@gmail.com?subject=Contact">
                            <button
                                    className="bg-[#d5a948] uppercase text-white px-14 py-4 rounded-md mt-8 text-xl"
                                >
                                    Contactez nous
                                </button>
                            </a>
                        </div>
                        <div className="md:flex md:justify-center mt-12 md:mt-0">
                            <video
                                className="-z-50 md:max-h-[550px]"
                                autoPlay
                                playsInline
                                loop
                                muted
                            >
                                <source src={introVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </Section>
                <Section id="about">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-14">
                        <div>
                            <img
                                src={aboutImg}
                                alt="About"
                                className=""
                            />
                        </div>
                        <div>
                            <SectionTitle title="Qui sommes nous" />
                            <p className="text-xl my-4 uppercase">
                                C'est sur les terrains de football des hauts de
                                Lausanne que Nils Käller et Brais Sesto font
                                connaissance, alors qu'ils étaient à peine âgés
                                d'une dizaine d'années.
                            </p>
                            <p className="text-xl my-4 uppercase">
                                Quelques années plus tard, Nils obtient un CFC
                                au Beau-Rivage Palace et Braïs dans le cadre de
                                Gastro Vaud. Ils poursuivent ensuite leur
                                formation à l'École Hôtelière de Genève où ils
                                ont continué à apprendre et à évoluer.
                            </p>
                            <p className="text-xl my-4 uppercase">
                                Leur passion commune pour l'accueil, le service,
                                le partage ainsi que les expériences gustatives
                                et festives donne naissance à The Monarchs. 🍸👑
                            </p>
                        </div>
                    </div>
                </Section>
                <Section id="services">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-14">
                        <div>
                            <SectionTitle title="Nos Services" />
                            <p className="text-xl my-4 uppercase">
                                <b>
                                    Une prestation sur-mesure en fonction de vos
                                    besoins.
                                </b>
                                <br />
                                <br />
                                Proposez une expérience unique et de qualité à
                                vos invités grâce à notre passion et
                                savoir-faire du service et bartending ! Combinez
                                plusieurs de nos prestations dans vos événements
                                privés et professionnels.
                                <br />
                                <br />
                                Parlez-nous de votre projet, apprenons à nous
                                connaître et nous vous ferons parvenir une offre
                                personnalisée !
                            </p>
                        </div>
                        <div className="flex flex-row justify-center w-full">
                            <img
                                className="w-full md:w-[80%] "
                                src={serviceImg}
                                alt="Services"
                            />
                        </div>
                    </div>
                </Section>
                <Section id="partners">
                    <div className="px-14 h-full flex flex-col md:items-center">
                        <SectionTitle title="Nos partenaires" />
                        <div className="flex flex-col justify-center items-center md:flex-row md:justify-items-start flex-wrap md:justify-evenly">
                            <img
                                src={sponsor1}
                                alt="Sponsor 1"
                                className="w-1/3 md:h-[250px] md:w-auto"
                            />
                            <img
                                src={sponsor2}
                                alt="Sponsor 2"
                                className="w-1/3 md:h-[250px] md:w-auto my-5"
                            />
                            <img
                                src={sponsor3}
                                alt="Sponsor 3"
                                className="w-1/3 md:h-[250px] md:w-auto"
                            />
                        </div>
                    </div>
                </Section>
                <Section id="prices">
                    <div className="px-14 h-full w-full flex flex-col justify-center items-center md:items-center">
                        <SectionTitle title="Nos Offres" />
                        <div className="w-full flex flex-col justify-center items-center md:flex-row flex-wrap place-items-center">
                            {offers.map((offer, index) => (
                                <PriceCard
                                    key={index}
                                    title={offer.title}
                                    description={offer.description}
                                    price={offer.price}
                                    features={offer.features}
                                    nbOfUsers={offer.nbOfUsers}
                                />
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
