import React from 'react'
import Featured from '../../component/featured/featured'
import Slide from '../../component/slide/slide'
import Trust from '../../component/trust/trust'
import CatCard from '../../component/catCard/catCard'
import ProjectCard from '../../component/projectCard/projectCard'
import {cards,projects} from '../../data'
import './home.scss'
const Home = () => {
  return (
  <div className="home">
    <Featured/>
    <Trust/>
    <h1 className="ptitle">Popular professional services</h1>
    <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
    </Slide>
    <div className="features">
      <div className="container">
        <div className="item">
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className="title">
            <img src="./img/check.png" alt="" />
            The best for every budget
          </div>
          <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Quality work done quickly
          </div>
          <p>Find the right freelancer to begin working on your project within minutes.</p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Protected payments, every time
          </div>
          <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
          <div className="title">
            <img src="./img/check.png" alt="" />
             24/7 support
          </div>
          <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
        </div>
        <div className="item">
          <video src="./img/video.mp4" controls></video>
        </div>
      </div>
    </div>
    <div className="features dark">
      <div className="container">
        <div className="item">
          <h1>fiverr business.</h1>
          <h1>A business solution designed for <i>teams</i></h1>
          <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
          <div className="title">
            <img src="./img/check.png" alt="" />
            Get matched with the perfect talent by a customer success manager          </div>          
          <div className="title">
            <img src="./img/check.png" alt="" />
            Connect to freelancers with proven business experience
          </div>          
          <div className="title">
            <img src="./img/check.png" alt="" />
            Manage teamwork and boost productivity with one powerful workspace          
          </div>
          <button>Explore Fiverr Business</button>          
          </div>
        <div className="item">
          <img src="./img/feature.png" alt="" />
        </div>
      </div>
    </div>
    <Slide className="projectslide" slidesToShow={4} arrowsScroll={5}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
    </Slide>
  </div> 
  )
}

export default Home
