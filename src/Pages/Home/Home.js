import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Cleanblog from './Cleanblog/Cleanblog'
import SecondTextSection from './SecondTextSection/SecondTextSection'
function Home() {
    return (
        <>
            <Cleanblog />
            <SecondTextSection />
            <Footer />
        </>
    )
}

export default Home