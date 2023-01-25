import React from 'react'
import Random from '../images/random.png'

export default function Corporate() {
  return (
    <div id='about'>
        <h1 className='Bootcamp'>Bootcamps</h1>

        <div className="c-buttons">
        <button id='act' className='c-button'><span>Corporate</span></button>
        <button className='c-button'><span>Groups</span></button>
        <button className='c-button'><span>Upcoming</span></button>
        </div>
        
        <div className='c-content'>
          <div className="c-written">
          <h1 id='live'>Live Sessions Everyday</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore similique fuga ipsa suscipit maiores ex ipsam. Possimus iure quo quis, omnis at ratione aliquam nam itaque! Corporis suscipit sequi numquam!</p>
          <button className='c-button2'><p>Join Now -{'>'}</p></button>
          </div>
          <div >
            <img src={Random} className="c-img" alt="" />
          </div>
        </div>
        
    </div>
  )
}
