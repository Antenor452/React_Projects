import React from 'react'
import { useState } from 'react';

const Tour = ({place ,deleteTour}) => {
  const { id,name, info, image, price } = place;
  const [readMore, setReadMore] = useState(false);
  return (
  
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>
            ${price}
          </h4>
        </div>
        <p style={{ overflow: 'hidden', textOverflow:'ellipsis',maxLines:'3'}} >
          {readMore?info:`${info.substring(0,200)} ...`}
          <button onClick={()=>setReadMore(!readMore)}>{readMore ?'Show less':'Read More'}</button>
        </p>
        <button className='delete-btn'  onClick={()=>deleteTour(id)}
        >not interested</button>
      </footer>
   </article>
  )
}

export default Tour