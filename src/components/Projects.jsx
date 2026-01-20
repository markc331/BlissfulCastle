import galleryElements from './galleryElements';
import './Projects.css';
import GithubLogo from '../assets/GitHub_Invertocat_white.png';


function Projects() {
    return (
        <div className="gallery_container">
            <h2 className="personal">Projects</h2>
            <div className="cards">
                {galleryElements.map((element) => (
                    <a key={element.id} className="project_card" href={element.url} target="_blank" rel="noreferrer">
                        <div className="project_title"><h3>{element.title}</h3></div>
                        <img src = {element.thumbnail} alt={`${element.title} preview`} className='gallery_card_img'/>
                        <p className='project_description'>{element.description}</p>
                        {element.url ? (
                            <div className="project_actions">
                                <a href={element.git}><button className="project_code"><img src={GithubLogo} className="ghLogo"/><p className='ghName'>Github Repository</p></button></a>
                                <p className="directions">Click to View Project</p>
                            </div>
                        ): (
                            <div className="project_actions">
                                <a href={element.git}><button className="project_code"><img src={GithubLogo} className="ghLogo"/><p className='ghName'>Github Repository</p></button></a>
                                <p className="directions">Project Unavailable</p>
                            </div>
                        )}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Projects