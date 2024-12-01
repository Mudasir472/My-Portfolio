import myImg from "../assets/Images/myImg.png"
import { Link } from "react-router-dom"
// import Typed from "react-typed";
import Typical from 'react-typical';
import "./home.css"
function TopPage() {
    return (<>
        <div className="toppage">
            <div className="toppageMain container flex items-center justify-between">
                <div className="top-left flex flex-col items-start justify-evenly w-1/2">
                    <p className="p1">{"Hi!, I am  a".toUpperCase()} </p>
                    <p className="p2">
                        <Typical
                            loop={Infinity}
                            steps={['Web Developer', 2000, 'YouTuber', 2000]}
                        />
                    </p>
                    <p className="p3 mb-3">Passionate web developer with 2 Years of experience in creating dynamic and visually appealing websites. Dedicated to delivering high-quality, user-friendly solutions to clients. Currently seeking new opportunities to collaborate and innovate in the ever-evolving world of web development.</p>
                    <div className=" mt-4 resumeBtn flex items-center justify-center ">

                        <Link className="flex items-center justify-center w-full h-full" to={'/resume'}>View Resume</Link>
                    </div>
                </div>
                <div className="top-right">
                    <img src={myImg} alt="" />
                </div>
            </div>
            <br /><br />
            <div className="passionate flex items-center justify-between">
                <div className="flex w-95 items-center container justify-between ">
                    <p>Final-year student</p>
                    <p>MERN stack developer</p>
                    <p>Passionate About Tech</p>
                </div>
            </div>
        </div>
    </>);
}
export default TopPage;