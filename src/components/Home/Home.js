import ProjectList from "../ProjectList/ProjectList";
import Skills from "../Skills/Skills";
import Welcome from "../Welcome/Welcome";

function Home() {
    return <div>
        <Welcome />
        <Skills></Skills>
        <ProjectList />
    </div>;
}

export default Home;