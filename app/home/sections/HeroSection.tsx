import "../css/style.css"
import "../css/HeroSection.css"
import Image from "next/image";

export default function HeroSection() {
    return (
        <>
            <section className="hero">
                <div className="containerh">
                    <div className="hero-circle">
                        <Image src="/res/DSC_1453.png" alt="Hero Image" width={300} height={300} className="hero-image" />
                    </div>
                    <h1><b>Kim Louise Labrador</b></h1>
                    <p className="tagline">Developer · Designer · Musician</p>
                    <p className="tagline">Ad Astra Per Aspera</p>
                    <div className="hero-buttons">
                        <a href="#portfolio" className="btn">View Portfolio</a>
                        <a href="#contact" className="btn-outline">Contact Me</a>
                    </div>
                </div>
            </section>
        </>
    );
}
