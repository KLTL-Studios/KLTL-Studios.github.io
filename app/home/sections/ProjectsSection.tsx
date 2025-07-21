import "../css/ProjectSection.css";
import ProjectCardComponent from "../components/ProjectCardComponent";

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

interface Props {
    projects: Project[];
}

export default function ProjectsSection(props: Props) {
    return (
        <>
            <section id="portfolio" className="projects">
                <div className="container">
                    <h2>My Projects</h2>

                    <div className="project-grid">
                        {props.projects.map((project, idx) => (
                            <ProjectCardComponent
                                key={idx}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}