import courseElements from './courseElements';
import './Courses.css';
import GithubLogo from '../assets/GitHub_Invertocat_white.png';


function Courses() {
    return (
        <div className="course_list">
            <h2 className="course_container">Undergraduate Courses</h2>
                {courseElements.map((element) => (
                    <div className="course">
                        <h3>{element.title}</h3>
                        <p className='course_description'>{element.description}</p>
                        <div className="course_actions">
                            {element.git? (<a href={element.git}><button className="course_code" style={{width: "0.4vw", minWidth: "100px"}}><img src={GithubLogo} className="ghLogo"/><p className='ghName'>Github</p></button></a>) : null}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Courses