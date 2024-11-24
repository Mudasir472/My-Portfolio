const ListSection = ({ title, items }) => (
    <div className="allSkills flex flex-col items-start justify-between">
        <h2 className="mb-3">{title}</h2>
        <div className="skills-list mb-3">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);
export default ListSection