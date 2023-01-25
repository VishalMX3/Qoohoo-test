import React from 'react'

function tick(props) {
  return (
    <div className='tick-content'>
        <div className="tick-image">
            <img src={props.image} style={{}} />
        </div>
        <div className="tick-text">
            <h2>{props.title}</h2>
            
        </div>
    </div>
  )
}

export default tick