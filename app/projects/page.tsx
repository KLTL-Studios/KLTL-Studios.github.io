import ProjectsSection from "../home/sections/ProjectsSection";

const projects = [
    {
        title: "KnowledgeSweeper",
        description: "Minesweeper but it has a twist, a quiz to keep your life",
        image: "/res/KnowledgeSweeper_Icon.svg",
        link: "projects/KnowledgeSweeper",
    },
    {
        title: "Project 100",
        description: "An educational RPG that teaches programming through block-based puzzles.",
        image: "/res/Project100_Icon.svg",
        link: "projects/Project100",
    },
    {
        title: "Website Clone Redesign",
        description: "A website clone redesign for Senate of the Philippines - 19th Congress",
        image: "/res/icon/KLTL_Studios.svg",
        link: "/Clone-Redesign/index.html",
    },
    {
        title: "Game Publishing Form",
        description: "A game publishing form for game developers",
        image: "/Game Publishing/res/images/KLTL Logo.png",
        link: "/Game Publishing/form.html",
    },
    {
        title: "Simple 2D Game",
        description: "A simple 2D game made with Godot Engine, where you can make the character move and collide with the environment.",
        image: "/Web/2D.icon 1.svg",
        link: "/Web/2D.html",
    },
    {
        title: "Teacher's Day Gift",
        description: "A website for the Teacher's Day Gift to Sir Marvin",
        image: "/Happy Teachers Day/res/Sir_Marvin.png",
        link: "/Happy Teachers Day/index.html",
    },
    // {
    //     title: "Birthday Game Gift",
    //     description: "A website I made for a birthday game gift to my friend",
    //     image: "/HappyBirthday/Icon.svg",
    //     link: "/HappyBirthday/index.html",
    // },
    // {
    //     title: "Design Showcase",
    //     description: "From UI/UX to visual branding, see how I bring ideas to life through design.",
    //     image: "/res/icon/KLTL_Studios.svg",
    //     link: "projects/design",
    // },
];

export default function Projects() {
    return (
        <>
            <ProjectsSection projects={projects} />
        </>
    );
}

