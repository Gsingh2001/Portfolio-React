import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
        <Nav />
        <Header />
        <About />
        <Services />
       
        <Projects />
        <Contact />
        <Footer />
        </div>
    )
}

export default Home
