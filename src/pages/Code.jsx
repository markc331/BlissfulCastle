import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Courses from "../components/courses";
import "./Code.css"

function Code() {
  return (
    <div className="container">
      <Nav />
      <div>
        <Projects />
        <Courses />
      </div>
      <Footer />
    </div>
  )
}

export default Code