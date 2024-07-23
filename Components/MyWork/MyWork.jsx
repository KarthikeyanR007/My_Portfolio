import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest works</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
      {mywork_data.map((work,index)=>{
        return <a href="#"><img key={index} src={work.w_img} alt="" /></a>
      })}
      </div>
  
    </div>
  )
}

export default MyWork
