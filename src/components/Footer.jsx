import './Footer.css';
import BlissfulCastle from "/blissful_castle.svg";
import GitLogo from '../assets/GitHub_Invertocat_black.png';
import LinkedInLogo from '../assets/InBug-Black.png';

function Footer() {
    return (
        <div className="footer_container">
            <a href="/" className="footer_link"><img src={BlissfulCastle} className="logo"/></a>
            <h1 className = "footer_title">© 2026 Blissful Castle</h1>
            <a href="https://github.com/markc331" className="footer_link"><img src={GitLogo} className='logo' /></a>
            <a href="https://www.linkedin.com/in/mark-castillo-1227811a2/" className="footer_link"><img src={LinkedInLogo} className='logo' /></a>
        </div>
    );
}

export default Footer

