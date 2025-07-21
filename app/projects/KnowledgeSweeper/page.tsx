"use client"
import styles from "../css/ProjectPage.module.css";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";


const project = {
    title: "Knowledge Sweeper",
    subtitle: "Minesweeper but it has a twist, a quiz to keep your life",
    description:
        `This game is just like a normal Minesweeper but it has a twist where if you pick a square with a bomb in it a question will pop up when you answer it correctly you don’t lose a life and you can continue but if answered wrong you lose a life as a consequence.`,
    tags: [
        "Java",
        "Minesweeper",
        "Educational Game",
        "Quiz",
    ],
    image: "/res/KnowledgeSweeper_Icon.svg",
    github: "https://github.com/KimTRM/KnowledgeSweeper",
    playLink: "https://kltl-studios.itch.io/knowledgesweeper", // if hosted locally

    gallery: [
        "/res/ScreenShots/KnowledgeSweeper/Screenshot 2025-06-03 220419.png",
        "/res/ScreenShots/KnowledgeSweeper/Screenshot 2025-06-03 220501.png",
        "/res/ScreenShots/KnowledgeSweeper/Screenshot 2025-06-03 220535.png",
        "/res/ScreenShots/KnowledgeSweeper/Screenshot 2025-06-03 220556.png",
        "/res/ScreenShots/KnowledgeSweeper/Screenshot 2025-06-03 220614.png",
        "/res/ScreenShots/KnowledgeSweeper/Screenshot 2025-06-03 220624.png",
        "/res/ScreenShots/KnowledgeSweeper/Screenshot 2025-06-03 220645.png"
    ]
};

export default function ProjectPage() {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    return (
        <>
            <Head>
                <title>{project.title} | KLTL Studios</title>
            </Head>
            <main className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.subtitle}>{project.subtitle}</p>
                    <p className={styles.description}>{project.description}</p>

                    <Image
                        width={100}
                        height={100}
                        src={project.image}
                        alt={project.title}
                        className={styles.banner}
                    />

                    <div className={styles.gallery}>
                        {project.gallery.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Screenshot ${index + 1}`}
                                width={300}
                                height={180}
                                className={styles.galleryImage}
                                onClick={() => setPreviewImage(src)}
                            />
                        ))}
                    </div>

                    <div className={styles.tagList}>
                        {project.tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className={styles.links}>
                        <a
                            href={project.github}
                            target="_blank"
                            className={styles.btn}>
                            View on GitHub
                        </a>
                        <a
                            href={project.playLink}
                            target="_blank"
                            className={styles.btnOutline}>
                            Download
                        </a>
                    </div>
                </div>
            </main>

            {previewImage && (
                <div className={styles.previewOverlay} onClick={() => setPreviewImage(null)}>
                    <div className={styles.previewContainer} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setPreviewImage(null)}>
                            &times;
                        </button>
                        <Image
                            src={previewImage}
                            alt="Preview"
                            width={960}
                            height={540}
                            className={styles.previewImage}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
