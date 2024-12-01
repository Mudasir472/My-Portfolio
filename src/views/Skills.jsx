import AllSkills from "./AllSkills";
import java from "../assets/Images/java.svg"
import js from '../assets/Images/js.svg'
import dsa from '../assets/Images/dsa.jpg'
import git from '../assets/Images/git.svg'
import mongo from '../assets/Images/mongo.svg'
import node from '../assets/Images/node.svg'
import reactjs from '../assets/Images/reactjs.svg'
import redux from '../assets/Images/redux.svg'
import tailwind from '../assets/Images/tailwind.svg'
import vscode from '../assets/Images/vscode.svg'
function Skills() {
    const skillsData = [
        {
            img: [js, java],
            heading: "Programming Languages",
            content: ["Java", "JavaScript", "HTML"]
        },
        {
            img: [reactjs, redux,tailwind],
            heading: "Libraries & Frameworks",
            content: ["React", "Redux", "Bootstrap", "Tailwind CSS"]
        },
        {
            img: [mongo, node],
            heading: "Backend & Database",
            content: ["Node.js", "Express.js", "MongoDB"]
        },
        {
            img: [git, vscode],
            heading: "Dev Tools",
            content: ["Git", "GitHub", "VSCode"]
        },


        {
            img: [dsa],
            heading: "Other Skills",
            content: ["Problem Solving", "Data Structures", "Algorithms"]
        }
    ];

    return (
        <div className="skills">
            <div className="skillsMain container">
                <h1>My Skills</h1>
                <div className="allSkills flex flex-wrap">
                    {skillsData.map((skill, index) => (
                        <AllSkills
                            key={index}
                            img={skill.img}
                            heading={skill.heading}
                            content={skill.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
