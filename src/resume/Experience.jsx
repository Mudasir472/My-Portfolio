import "./resume.css"
import ProjectCard from "./ProjectCard.jsx"
import ExperienceCard from "./ExperienceCard.jsx";
import ListSection from "./ListSection.jsx";
import EducationSection from "./EducationSection.jsx";
function Experience() {
    const projects = [
        {
            title: "Wanderlust: A Journey Hub",
            stack: "MERN Stack",
            source: "https://github.com/Mudasir472/Wanderlust-a-journey-Hub-React",
            description: [
                "Developed a comprehensive web application inspired by Airbnb, providing users with a platform to list, discover, and book accommodations.",
                "Implemented core features like authentication, authorization, listings, and review systems using Node, React, MongoDB, and the passport library for authentication."
            ]
        },
        {
            title: "ZakatCare: Connection & Distribution System",
            stack: "MERN Stack",
            source: "https://zakat-care.vercel.app/",
            description: [
                "Developed a community-driven platform to facilitate Zakat donations, connecting donors to meaningful causes (scholarships, feeding programs, relief efforts, and marriage assistance).",
                "Implemented user-friendly features for donors, including a donation form and cause-specific allocation options.",
                "Designed a dashboard to display key donation metrics and Zakat fund allocations, using a dynamic grid layout for seamless data presentation and future expansion."
            ]
        },
        {
            title: "Mitho-Electronics: E-Commerce Website",
            stack: "MERN Stack",
            source: "https://github.com/Mudasir472/Muddu-electronics",
            description: [
                "Developed a comprehensive e-commerce platform using the MERN stack to facilitate product browsing, user authentication, and cart systems.",
                "Utilized Redux toolkit for efficient state management, ensuring a consistent application state across the site."
            ]
        }
    ];

    const workExperiences = [
        {
            title: "Intern, Web Developer, MietY MANUU, Hyderabad",
            date: "March-2024 to June-2024",
            description: [
                "Developed and maintained web applications as part of the MietY project, focusing on creating accessible and user-friendly interfaces.",
                "Collaborated with a team to design, implement, and optimize web features, ensuring alignment with project goals."
            ]
        },
        {
            title: "Participant, Innovation, Design, and Entrepreneurship (IDE) Bootcamp",
            date: "Hyderabad, January 2024",
            description: [
                "Engaged in a five-day residential bootcamp focused on innovation, design, and entrepreneurship.",
                "Gained hands-on experience in developing innovative ideas, collaborative problem-solving, and entrepreneurial strategies.",
                "Networked with industry professionals and mentors to enhance skills in ideation, prototyping, and pitching."
            ]
        }
    ];

    const technicalSkills = ["JavaScript/Java", "ReactJs/Redux/Tailwind", "Node/Express/MongoDB", "Git/Github/VSCode", "DSA"];
    const professionalSkills = ["Good communication", "Team player", "Strong problem solver", "Good time management"];
    const education = [
        { degree: "B-Tech(CS & IT)", location: "Hyderabad", years: "2021-2024", details: "8.51 CGPA" },
        { degree: "Intermediate (PCM)", location: "J&K", years: "2019-2021", details: "86.6 percentage" }
    ];
    const interests = ["Photography", "Travelling", "Gymming"];


    return (<div>
        <div className="exp">
            <div className="expMain container flex justify-between">
                <div className="exp-left">
                    <h2 className="mb-3">Work Experiences</h2>
                    {workExperiences.map((experience, index) => (
                        <ExperienceCard
                            key={index}
                            title={experience.title}
                            date={experience.date}
                            description={experience.description}
                        />
                    ))}

                    <h2 className="mb-3">Projects</h2>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            stack={project.stack}
                            source={project.source}
                            description={project.description}
                        />
                    ))}

                </div>
                <div className="exp-right flex flex-col items-start ">
                    <ListSection title="Skills" items={technicalSkills} />
                    <ListSection title="Professional" items={professionalSkills} />
                    <EducationSection title="Education" education={education} />
                    <ListSection title="Interests" items={interests} />
                </div>
            </div>
        </div>
    </div>);
}

export default Experience;