import { useState } from "react";
import AllProjects from "./AllProjects";
import shop1 from "../assets/Images/shop1.png";
import shop2 from "../assets/Images/shop2.png";
import zakat1 from "../assets/Images/zakat1.png";
import zakat2 from "../assets/Images/zakat2.png";
import wanderlust1 from "../assets/Images/wanderlust1.png";
import wanderlust2 from "../assets/Images/wanderlust2.png";
import electronics1 from "../assets/Images/electronics1.png";
import electronics2 from "../assets/Images/electronics2.png";

import "./home.css";

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const projects = [
        {
            img: zakat2,
            heading: "ZakatCare: Collection, Distribution System",
            desc: ['MERN', 'React', 'MongoDB'],
            category: ['all', 'backend'],
            link: 'https://zakat-care.vercel.app'
        },
        {
            img: wanderlust1,
            heading: "Wanderlust: A Journey Hub",
            desc: ['EJS', 'Express', 'MongoDB'],
            category: ['all', 'backend'],
            link: 'https://github.com/Mudasir472/Wanderlust-Backend'

        },
        {
            img: electronics2,
            heading: "Muddu-Electronics: An ecommerce Website",
            desc: ['Redux Toolkit', 'React', 'Bootstrap'],
            category: ['all', 'frontend'],
            link: 'https://github.com/Mudasir472/Muddu-electronics-Backend'

        },

        {
            img: shop1,
            heading: "ShopOP : a shopping website",
            desc: ['React', 'Bootstrap', 'HTML'],
            category: ['all', 'frontend'],
            link: 'https://mudasir472.github.io/Shop-OP/'

        },

    ];

    // Filter projects based on the selected category
    const filteredProjects = projects.filter((project) =>
        project.category.includes(selectedCategory)
    );

    // Function to apply styles based on selected category
    const getCategoryStyle = (category) => {
        return {
            color: selectedCategory === category ? 'rgb(82 113 255)' : 'rgb(143 143 143)',
            cursor: 'pointer',
            borderBottom: selectedCategory === category ? ' solid ' : ''
        };
    };

    return (
        <div className="projects">
            <div className="projectsMain container">
                <h1 className="my-2">Featured Projects</h1>
                <div className="projectList flex items-center justify-between">
                    <p style={getCategoryStyle("all")} onClick={() => setSelectedCategory("all")}>All</p>
                    <p style={getCategoryStyle("backend")} onClick={() => setSelectedCategory("backend")}>Backend</p>
                    <p style={getCategoryStyle("frontend")} onClick={() => setSelectedCategory("frontend")}>Frontend</p>
                </div>
                <div className="allProjects flex items-start flex-wrap">
                    {filteredProjects.map((project, index) => (
                        <AllProjects
                            key={index}
                            img={project.img}
                            heading={project.heading}
                            desc={project.desc}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
