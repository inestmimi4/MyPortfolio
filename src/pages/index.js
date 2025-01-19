import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Quote from "../components/Quotes";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DomHead from "../components/Head";
import React, {useEffect} from "react";
import Aos from "aos";
import { DataContextProvider } from "../context/DataContext";
import Container from "../components/Container";
import GithubContributions from "../components/githubContributions";


export default function HomePage() {

    useEffect(() => {
        Aos.init({ duration: "1000" });
    }, []);

    return (
        <DataContextProvider>
            <DomHead />
            <Layout>
                <Container>
                    <Intro/>
                    <GithubContributions username="inestmimi4"/>
                    <Projects/>
                    <Quote/>
                    <Contact/>
                </Container>
                <Footer/>
            </Layout>
        </DataContextProvider>
    );
}

