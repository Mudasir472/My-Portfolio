import "./home.css"

function AllSkills({heading , content,img}) {
    const langs = ['Java', 'HTML', 'CSS'];
    return (
        <div className="my-all-skills">
            <div className="all-skills flex items-start justify-evenly flex-col">
                <div className="all-skills-main flex flex-col justify-evenly">
                    <div className="skill-images flex">
                        {img.map((src, index) => (
                            <img className="me-2" key={index} src={src} alt={`${heading} icon ${index + 1}`} />
                        ))}
                    </div>
                    <h2 >{heading}</h2>
                    <p>
                        {content.map((cont) => (
                            <p key={cont}>{cont}</p>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AllSkills;
