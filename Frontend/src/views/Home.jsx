import Experience from "./Experience";
import Freelance from "./Freelance";
import GetInTouch from "./GetInTouch";
import Projects from "./Projects";
import Skills from "./Skills";
import TopPage from "./TopPage";

function Home() {
    return (<div>
        <div className="homePage ">
            <TopPage />
            <Skills />
            {/* <Experience/> */}
            <Freelance />
            <Projects />
            <GetInTouch/>
        </div>
    </div>);
}

export default Home;