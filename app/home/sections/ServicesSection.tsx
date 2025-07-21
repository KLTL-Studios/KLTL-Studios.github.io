import "../css/style.css"

export default function ServicesSection() {
    return (
        <>
            <section className="services">
                <div className="container">
                    <h2>What I Do</h2>
                    <div className="services-grid">
                        <div>
                            <h4>Game Development</h4>
                            <p>Godot, Unity, C#, Java, GDScript</p>
                        </div>
                        <div>
                            <h4>Web Development</h4>
                            <p>Django, Python, React, HTML, CSS, TypeScript, JavaScript, PHP, MySQL, PostgresSQL</p>
                        </div>
                        <div>
                            <h4>UI/UX Design</h4>
                            <p>Figma, Photoshop</p>
                        </div>
                        <div>
                            <h4>Music & Sound</h4>
                            <p>Original compositions, soundtracks</p>
                        </div>
                        <div>
                            <h4>Media Creation</h4>
                            <p>Photography & Videography</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}