import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Timeline from "../components/Timeline";
import './Home.css'



function Home() {
  return (
    <div className="container">
      <Nav />
      <div className="welcome">
        <div className="welcome-logo">
          <div className="welcome-sky" aria-hidden="true" />
          <div className="welcome-castle" aria-hidden="true" />
          <div className="welcome-clouds" aria-hidden="true" />
          <div className="welcome-moon" aria-hidden="true" />
        </div>
      </div>
      <Profile/>
      <Timeline />
      <Footer/>
    </div>
  )
}

export default Home
