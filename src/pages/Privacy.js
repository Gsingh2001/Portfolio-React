import React from 'react'
import Nav from '../components/Nav'
import PrivacyContent from '../components/PrivacyContent'
import Footer from '../components/Footer'

function Privacy() {
    return (
        <div>
            <Nav />
            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h1>Privacy Policy</h1>
                        </div>
                        {/* end of col */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </header>
            <PrivacyContent />
            <Footer />



        </div>
    )
}

export default Privacy
