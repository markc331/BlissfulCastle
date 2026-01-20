import React from "react";
import profilePic from '../assets/IMG_6420.JPG';
import './Profile.css';

function Profile() {
    return (
        <div className = "profile">
            <div className = "pic">
                <img src={profilePic} className="profile_pic"/>
            </div>
            <div className = "bio">
                <h1 className="name">Mark Castillo</h1>
                <p className = "degree">Bachelors of Science in Computer Science and Engineering <br/>Santa Clara University - Class of 2023</p>
                <p className ="desc">Former Science Teacher, specialized in the education of neurodivergent learners in abstract concepts in chemistry, physics, and earth & space science. I graduated from Santa Clara University with a Bachelor of Engineering in Computer Science, where I gained a solid foundation in various programming languages, as well as data structures, algorithms, and software engineering principles. I also developed my skills in database management and data processing, which I applied in several projects and assignments that involved collecting, analyzing, and visualizing data from different sources and domains. I am passionate about learning new technologies and exploring new challenges in the field of web development and data science.</p>
            </div>
        </div>
    )
}

export default Profile