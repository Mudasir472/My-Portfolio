import "./home.css"
import email from "../assets/Images/email.svg"
import location from "../assets/Images/location.svg"
import mobile from "../assets/Images/mobile.svg"
import GetInTouch from "./GetInTouch"
function Contact() {
    return (<div>
        <div className="contact">
            <div className="contactMain container">
                <div className="contactTop flex flex-col items-center justify-evenly">
                    <h2>Contact</h2>
                    <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <a className="mail" href="mailto:bhatmuddu472@gmail.com">bhatmuddu472@gmail.com</a> .Want to get connected? Follow me on the social channels below.</p>
                    <div className="contactLinks flex items-center justify-between">
                        <div className="link">
                            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                        <div className="link">
                            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                        <div className="link">
                            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                        <div className="link">
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="contactDetails  flex flex-col justify-evenly">
                    <h1>Contact Details</h1>
                    <p>
                        I can be contacted at 6006189840 or via email at <a className="mail" href="mailto:bhatmuddu472@gmail.com">bhatmuddu472@gmail.com</a>. Based in Gachibowli, Hyderabad, Telangana, you can also connect with me on <a className="mail" href="https://www.linkedin.com/in/mudasir-bhat-553119228/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or view my work on <a className="mail" href="https://github.com/Mudasir472" target="_blank" rel="noopener noreferrer">GitHub</a>.
                    </p>

                </div>
                <div className="phoneContact my-5 flex justify-between">
                    <div className="phones flex items-center justify-between">
                        <div className="ico">
                            <img src={mobile} alt="" />
                        </div>
                        <div className="phonedesc">
                            <h3>Phone</h3>
                            <p>6006189840</p>

                        </div>
                    </div>
                    <div className="phones flex items-center justify-between">
                        <div className="ico">
                            <img src={location} alt="" />

                        </div>
                        <div className="phonedesc">
                            <h3>Location</h3>
                            <p>Gachibowli, Hyderabad 500032</p>
                        </div>
                    </div>
                    <div className="phones flex items-center justify-between">
                        <div className="ico">
                            <img src={email} alt="" />

                        </div>
                        <div className="phonedesc">
                            <h3>Email</h3>
                            <p>bhatmuddu472@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="gmap my-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.718086653832!2d78.3608472105905!3d17.425311683399503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f5ada6d80f%3A0x6d6400aee08b61a1!2sMaulana%20Azad%20National%20Urdu%20University!5e0!3m2!1sen!2sin!4v1731088595736!5m2!1sen!2sin" height={450} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="getTouch">
                    <GetInTouch />
                </div>
            </div>
        </div>
    </div>);
}

export default Contact;