import React from 'react'
import Banner from './Banner/Banner'
import MeetTheCast from './MeetTheCast/MeetTheCast'
import Spiral from '../../media/Home page/Background  Elements/Spiral.png'
import star from '../../media/Home page/Background  Elements/Star.png'

const Home = () => {
  return (
    <div>
        <Banner/>
        <section style={{
        background: `url(${Spiral})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}>
          <div style={{
        background: `url(${star})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}>
          <MeetTheCast></MeetTheCast>
          </div>
        </section>
    </div>
  )
}

export default Home