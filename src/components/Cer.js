import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import JsSlider from './JsSlider'
// import JsSlider from './JsSlider'



const Cer = () => {
  return (
    <>
        <div className='cer'>
            <div className='loading-cer'>
            <FontAwesomeIcon className='lang' icon={faLanguage} />
            <span className='goal'>Certification still loading ...</span>
            </div>
            <div id="Slider"> 
              
                 <div className="aspect-ratio-169">
                    <img  src={require('../asset/CS50P.jpg')}  alt='cer'/>
                    <img  src={require('../asset/n5.jpg')}  alt='cer'/>
                  </div>
               
               
               
            </div>
            <div className="dot-container">
                    <div className="dot active"></div>
                    <div className="dot"></div>                 
               </div>
           <JsSlider></JsSlider>
        </div>
    </>
  )
}

export default Cer;