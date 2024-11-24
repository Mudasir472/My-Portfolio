import "./home.css"
import education from "../assets/Images/education.png"
import exp from "../assets/Images/experience.png"
function Experience() {
    return (<div>
        <div className="experience">
            <div className="experienceMain container">
                <h1>Education and Experience</h1>
                <div className="eduAndExp  flex flex-col items-start justify-between">
                    <div className="eduAndExp-top w-full flex items-center justify-between">
                        <div className="eduAndExp-top-left">
                            <div className="imgSection">
                                <img src={education} alt="" />
                            </div>
                        </div>
                        <div className="eduAndExp-top-right flex flex-col items-start justify-between">
                            <div className="education flex justify-between">
                                <p>Btech (CS & IT)</p>
                                <p>2024</p>
                            </div>
                            <div className="education flex justify-between">
                                <p>Btech (CS & IT)</p>
                                <p>2024</p>
                            </div>
                            <div className="education flex justify-between">
                                <p>Btech (CS & IT)</p>
                                <p>2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="eduAndExp-bottom w-full flex items-center justify-between">
                        <div className="eduAndExp-bottom-left">
                            <div className="imgSection ">
                                <img src={exp} alt="" />
                            </div>
                        </div>
                        <div className="eduAndExp-bottom-right flex flex-col items-start justify-between">
                            <div className="exp flex justify-between">
                                <p>Btech (CS & IT)</p>
                                <p>2024</p>
                            </div>
                            <div className="exp flex justify-between ">
                                <p>Btech (CS & IT)</p>
                                <p>2024</p>
                            </div>
                            <div className="exp flex justify-between">
                                <p>Btech (CS & IT)</p>
                                <p>2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Experience;