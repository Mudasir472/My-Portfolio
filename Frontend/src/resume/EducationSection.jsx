const EducationSection = ({ title, education }) => (
    <div className="allSkills flex flex-col items-start justify-between">
        <h2 className="mb-3">{title}</h2>
        <div className="skills-list mb-3">
            <ul>
                {/* list */}
                {education.map((edu, index) => (
                    <li key={index}>
                        {edu.degree} ({edu.location}) <br />
                        {edu.years} <br />
                        {edu.details}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
export default EducationSection
