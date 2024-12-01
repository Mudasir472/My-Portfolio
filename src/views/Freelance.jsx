import "./home.css"
function Freelance() {
    return (<div>
        <div className="freelance flex items-center">
            <div className="freelanceMain flex items-center justify-between container">
                <div className="freelance-left">
                    <p className="p1">I Am Available For Freelancing.</p>
                    <p className="p2">Open to freelance opportunities. Let's collaborate on your next project.</p>
                </div>
                <div className="freelance-right flex items-center justify-between">
                    <input type="text" placeholder="Enter Email" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>);
}

export default Freelance;