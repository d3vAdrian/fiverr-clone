import React, { useEffect, useState } from 'react'
import './navbar.scss'

const Navbar = () => {

  const [active, setActive] = useState(false);

  const isActive =() =>{
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)
    return ()=>{
      window.removeEventListener("scroll", isActive)
    }
  }, [])
  

  return (
    <div className={active ? "navbar active" : "navbar"} >
      <div className="container">
        <div className="logo">
          <span className="text">Fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>Egnlish</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      {active && (
      <>
        <hr />
        <div className="menu">
          <span>test</span>
          <span>test2</span>
          <span>test3</span>
        </div>
      </>
      )}
      
    </div>
  )
}

export default Navbar