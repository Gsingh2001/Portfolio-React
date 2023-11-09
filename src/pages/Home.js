import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Details from '../components/details'
import Projects from '../components/Projects'
import Works from '../components/Works'
import Testimonials from '../components/Testimonials'
import SectionDivider from '../components/SectionDivider'
import Questions from '../components/Questions'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
        <Nav />
        <Header />
        <About />
        <Services />
        <Details />
        <Projects />
        <Works />
        <Testimonials />
        <SectionDivider />
        <Questions />
        <Contact />
        <Footer />
        </div>
    )
}

export default Home
