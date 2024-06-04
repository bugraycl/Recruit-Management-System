import React from 'react'
import icon from "../../../assets/images/default.png"
import { Link } from 'react-router-dom'
const JobItem = () => {
  return (
    <div className="job__wrapper__card">
      <div className="job__wrapper__card--left">
        <img src={icon} alt="Icon" />
      </div>
      <div className="job__wrapper__card--line"></div>
      <div className="job__wrapper__card--right">
        <div className="job__wrapper__card--right__part-1">
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit delectus, qui modi reprehenderit tempore alias perferendis iste? Animi repudiandae quaerat qui voluptatibus ratione? Officia non in necessitatibus nulla laboriosam fuga!</p>
          <Link to="#" className="full-time">Title</Link>
        </div>
        <div className="job__wrapper__card--right__part-2">
          <i className="fa fa-heart-o"></i>
        </div>
      </div>
    </div>
  )
}

export default JobItem