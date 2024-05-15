import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <>
        <Navbar />
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="display-6 font-weight-normal" style={{color:'#0d6efd'}}>My favorite projects</h1>
                    <p className="lead font-weight-norma">Projects I've worked on across different languages and technologies.</p>
                </div>
            </div>
        </section>
        <ProjectCard />
        <Footer />
        </>

    )
}

export default Projects