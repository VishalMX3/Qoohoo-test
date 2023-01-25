import React from 'react'

export default function DivBox(props) {
  return (
    <div className='box-structure'>
        <div className="a-b-img">
            <img src={props.image} style={{}} />
        </div>
        <div className="s-b-text">
            <h2>{props.title}</h2>
            </div>
            <button className='c-button2'><p>Join Now -{'>'}</p></button>
        
    </div>
  )
}
