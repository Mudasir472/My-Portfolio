const ProjectCard = ({ title, stack, source, description }) => (
    <div className="exp1 flex flex-col mb-5">
        <div className="exp-head flex items-center justify-between">
            <h3 className="mb-3">{title}</h3>
            <p className="mb-3">{stack} | <a href={source}>Source</a></p>
        </div>
        <ul className="skills-list">
            {description.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
        </ul>
    </div>
);

export default ProjectCard
