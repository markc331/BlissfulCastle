import Nav from "../components/Nav";
import Profile from "../components/profile";
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
    </div>
  )
}

export default Home
