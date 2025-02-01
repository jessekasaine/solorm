import Hero from "../../components/hero/Hero.jsx";
// import ProjectComp from "../../components/projects/ProjectComp.jsx";
// import ServiceComp from "../../components/services/ServiceComp.jsx";
// import AboutComp from "../../components/about/AboutComp.jsx";

import styles from "./Home.module.css";

function Home() {
    return (
        <main className={styles.homeContainer}>
            <Hero/>
            {/*<ServiceComp/>*/}
            {/*<ProjectComp/>*/}
            {/*<AboutComp/>*/}
        </main>
    );
}

export default Home;