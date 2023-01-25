import React from 'react'
import Time from '../images/time.png'
function Footer() {
  return (
    <div id='footer'>
      <div className="f-content">
        <p>Powered by</p>
        <img src={Time} alt="" />
        <p><span>Privacy Policy</span></p>
        <p>Terms and Conditions</p>
      </div>
        </div>
  )
}

export default Footer