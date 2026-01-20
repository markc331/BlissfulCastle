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
        <h1>Welcome</h1>
      </div>
      <Profile/>
      <Timeline />
      <Footer/>
    </div>
  )
}

export default Home
