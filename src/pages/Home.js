import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Form from '../components/Form'

function Home() {
    return (
        <div>
            <Nav />
            <Header />
            <About />
            <Services />
            <Projects />
            <Form/>
            <Footer />
        </div>
    )
}

export default Home
