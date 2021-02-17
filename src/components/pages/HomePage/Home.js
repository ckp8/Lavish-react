import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

function Home() {
    return (
        <>
         <HeroSection {...homeObjOne}   />
         <HeroSection {...homeObjTwo}   />
         <HeroSection {...homeObjThree}   />
         <HeroSection {...homeObjFour}   />
        </>
    )
}

export default Home
