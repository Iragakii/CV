import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Mind = () => {
  return (
    <>
    <div className='box'>
        <div className='dash-x'></div>
        <div className='project'>
            <FontAwesomeIcon className='hat' icon={faGraduationCap} />
            <span className='duan'>Một chút về dự định tương lai mình :</span>
        </div>
        <div className='text-box'>
            <span className='jetking'>Giới thiệu nhiều hơn một chút về bản thân, hiện tại tớ sống và làm việc tại Hà Nội.
            Năm 2026 mình sẽ tốt nghiệp đại học FPT ,<br></br> nhưng mình sẽ không kết thúc việc học mà chuyển vào HCM sinh sống và
            tiếp tục nhập học FPT Jetking chuyên ngành an ninh mạng (cyber security).<br></br> Mình muốn rèn luyện kỹ nặng về dev Fullstack
            tốt nhất để áp dụng vào chuyên ngành cyber security .
            </span>
            <div className='poem'>
                <div className='dash-5'></div>
                <span className='poem-text'>"Lòng ta chung một thủ đô , lòng ta chung một cơ đồ Việt Nam ..."</span>
            </div>
            <span className='jcsec'>Năm 2028 mình sẽ tốt nghiệp ngành an ninh mạng và sở hữu song song 2 bằng ĐH FPT là
            Advanced Diploma In Software Engineering / Cybersecurity .<br></br> Trong 10 năm tiếp theo mình sẽ cố gắng theo đuổi và cống hiến
            phát triển sự nghiệp trong ngành an ninh mạng ... <br></br>Hiện tại đang là founder của JC Group mục tiêu tuổi 35-40 mình sẽ thành lập 
            JC Security Company .  </span>
        </div> 

    </div>
      
    </>
  )
}

export default Mind
