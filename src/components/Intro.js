import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat, faYinYang, faUserSecret, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div className='intro'>
            <span className='my-name'>Văn Nguyễn</span>
            <span className='my-job'>Advanced Diploma In Software Engineering</span>
            <div className='dash'></div>
       </div>
       <div className='detail-self'>
            <span className='detail-intro'>Xin chào, mình là Văn Nguyễn (iragaki JC), sinh viên theo học chương trình Lập trình viên Quốc tế (Advanced Diploma in Software Engineering) Đại học FPT.<br></br> 
            Hiện tại tớ đang founder của Ashura Cattery một trại mèo Sphynx và tớ đang là freelancer thiết kế web . 
            Tớ đang hướng tới trở thành một Fullstack Developer<br></br> và thực hiện thêm nhiều ước mơ phía trước.</span>
            <div className='info-cattery'>
              <Link to="https://www.facebook.com/profile.php?id=100092738982467&locale=vi_VN"><button className='fb-icon'><FontAwesomeIcon icon={faCat} /></button></Link>
              <Link to="https://www.tiktok.com/@jcgroup.vni?_t=8pxQh2NJOks&_r=1"><button className='tik-icon'><FontAwesomeIcon icon={faYinYang} /></button></Link>
              <span className='hint'>sở thích của tớ mèo và siêu xe ...</span>
            </div> 
            <div className='dash-2'></div>
       </div>
       <div className='contact'>
            <div className='top'>
            <Link to="https://www.topcv.vn/xem-cv/UlIBUAFRXFwDBVZSCgQABwEBAgVRAAdSVAFTDg2076"><button className='cv'>My CV</button></Link>
            <div className='dash-y'></div>  
            <Link to="https://www.facebook.com/van.hokhoi.585?mibextid=ZbWKwL"><FontAwesomeIcon className='my-fb' icon={faFacebookF} /></Link>
            <Link to="https://www.instagram.com/iragaki/"><FontAwesomeIcon className='my-ig' icon={faInstagram} /></Link>
            <Link to="https://github.com/Iragakii"><FontAwesomeIcon className='my-git' icon={faGithub} /></Link>
            <Link to="https://steamcommunity.com/id/mandababababa"><FontAwesomeIcon className='my-steam' icon={faUserSecret} /></Link>
            <Link to="https://opensea.io/iragaki"><FontAwesomeIcon className='my-sea' icon={faPalette} /></Link>
            </div>
            <div className='under'>
            <div className='dash-3'></div>
            </div>
       </div>
    </>
  )
}

export default Intro;
