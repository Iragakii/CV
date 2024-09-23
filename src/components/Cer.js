import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

const Cer = () => {
  return (
    <>
        <div className='cer'>
            <div className='loading-cer'>
            <FontAwesomeIcon className='lang' icon={faLanguage} />
            <span className='goal'>Certification still loading ...</span>
            </div>
            <div className='cs50'>
                <img className='cer50' src={require('../asset/CS50P.jpg')}  alt='cer'/>
                <img className='n5' src={require('../asset/n5.jpg')}  alt='cer'/>
            </div>
        </div>
    </>
  )
}

export default Cer
