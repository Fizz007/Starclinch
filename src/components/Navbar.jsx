import React from 'react'



const img = "https://verdant-biscuit-f278ad.netlify.app/Vectorlogo.ea2d63f5.png"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='navContainer'>
            <div className="logo">
                <img src={img} alt="" /> 
                <p>Starclinch</p>
            </div>

            <div className="user">
                <p>Hello Manish</p>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
