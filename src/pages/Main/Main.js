import React from 'react'
import { Helmet } from 'react-helmet'

import { About, Achievement, Contacts, Education, Experience, Footer, Landing, Navbar, Projects, Services, Skills, Testimonials } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education />            
            <Experience />  
            <Achievement />          
            <Projects />
            <Services />
            <Testimonials />
            {/* <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
