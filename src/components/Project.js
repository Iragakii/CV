import { faAndroid, faShopify } from '@fortawesome/free-brands-svg-icons'
import { faMasksTheater, faShoePrints, faVestPatches } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <>
        <div className='show'>
            <div className='dash-6'></div>
            <div className='project'>
                <FontAwesomeIcon className='mask' icon={faMasksTheater} />
                <span className='loading'>Một số dự án được thực hiện bợi mình still loading ...</span>
                <Link to="https://www.youtube.com/watch?v=jpTZjOdFgxE&t=1s"><FontAwesomeIcon className='nike' icon={faShoePrints} /></Link>
                <Link to="https://www.youtube.com/watch?v=dOYWZTzvtb8&t=5s"><FontAwesomeIcon className='dress' icon={faVestPatches} /></Link>
                <Link to="#"><FontAwesomeIcon className='fume' icon={faShopify} /></Link>
                <Link to="https://github.com/Iragakii/isupport/blob/master/isup.py"><FontAwesomeIcon className='bot ' icon={faAndroid} /></Link>
            </div>
            <div className='dash-7'></div>


        </div>
      
    </>
  )
}

export default Project;
