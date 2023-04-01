import React from 'react'

const Imagescard = ({elem, setClickImage}) => {

  return (
    <div className="imgcard" onClick={()=> setClickImage(elem)}>
    <img src={elem.img} alt="" />
  
    </div>
  )
}

export default Imagescard
