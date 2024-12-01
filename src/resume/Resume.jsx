import './resume.css'
import profile from "../assets/Images/profile-pic.png"
import Experience from './Experience';
function Resume() {
    return (<div>
        <div className="resume">
            <div className="resumeMain container ">
                <div className="resumeHead mb-3 flex items-center justify-between">
                    <div className="resumeHead-left">
                        <h3>Mudasir Ahmad Bhat</h3>
                        <p>Full stack web developer</p>
                    </div>
                    <div className="resumeHead-right">
                        <p>
                            <a href="tel:6006189840">
                                <i className="bi bi-telephone"></i>
                                <span>6006189840</span>
                            </a>
                        </p>
                        <p>
                            <a href="mailto:bhatmuddu472@gmail.com">
                                <i className="bi bi-envelope"></i>
                                <span>bhatmuddu472@gmail.com</span>
                            </a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/mudasir-bhat-553119228/">
                                <i class="bi bi-linkedin"></i>
                                <span>Mudasir/linkedin</span>
                            </a>
                        </p>
                        <p>
                            <a href="https://maps.google.com/?q=Hyderabad, India" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-geo-alt"></i>
                                <span>Hyderabad, India</span>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="profile flex items-center justify-between">
                    <div className="profile-left mb-4">
                        <img src={profile} alt="" />
                    </div>
                    <div className="profile-right w-full mb-4">
                        <p className=''>Passionate web developer skilled in creating impactful and user-centered applications. Experienced in developing full-stack projects using the MERN stack, including e-commerce platforms and interactive applications inspired by Airbnb. Proficient in front-end and back-end technologies, committed to delivering high-quality, accessible, and optimized solutions. Eager to leverage technical expertise and collaborate in building meaningful web development projects that address user needs and improve accessibility.</p>
                    </div>
                </div>
                <div className="expp">
                    <Experience />
                </div>
                <div className="footer flex items-center justify-between">
                    <div className="footerLinks flex  ">
                        <p><i class="bi bi-linkedin"></i></p><span>linkedin/mudasir</span>
                    </div>
                    <div className="footerLinks flex ">
                        <p><i class="bi bi-linkedin "></i></p><span>linkedin/mudasir</span>

                    </div>
                    <div className="footerLinks flex ">
                        <p><i class="bi bi-linkedin"></i></p><span>linkedin/mudasir</span>

                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Resume;