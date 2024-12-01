import React, { useState } from 'react';
import "./home.css";

function AllProjects({ img, heading, desc,link }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='w-49' >
            <div className="myProjects flex flex-col items-start justify-between">
                <div className="projectsImg my-5">
                    <img src={img} alt="" />
                </div>
                <div className="projectDesc w-11/12 flex items-start justify-between">
                    <div className="descc flex items-start justify-between">

                        {
                            desc.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))
                        }
                    </div>
                    <div
                        className="projectLink"

                    >
                        <a href={link} onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)} target="_blank" rel="noopener noreferrer">
                            <i className={`bi ${hovered ? 'bi bi-arrow-right' : 'bi-box-arrow-up-right'}`}></i>
                        </a>
                    </div>
                </div>
                <div className="projectHeading ">
                    <a href="" className=''>{heading}</a>
                </div>
            </div>
        </div>
    );
}

export default AllProjects;
