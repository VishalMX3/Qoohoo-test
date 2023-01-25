import React from 'react'
import DivBox from './DivBox'
import featureimage from '../images/feature_1.png'
import featureimage1 from '../images/feature_2.png'
import featureimage2 from '../images/feature_3.png'

export default function Division() {
  return (
    <div id='features'>
      <h1>Checkout my courses</h1>
     
       <div className='a-container' >
            <DivBox image={featureimage} title='Toledo'/> 
            <DivBox image={featureimage1} title='Pembroke Pines'/> 
            <DivBox image={featureimage2} title='Naperville'/> 
            
       </div>
    
    </div>
  )
}
