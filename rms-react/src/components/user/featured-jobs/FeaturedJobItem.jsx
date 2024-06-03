import React from 'react'
import icon from "../../../assets/images/default.png"
import { Link } from 'react-router-dom'
const FeaturedJobItem = () => {
  return (
    <div className="featured_job--wrapper__card">
        <div className='featured_job--wrapper__card--left'>
            <img src={icon} alt="" width="100px" height="100px" />
        </div>
        <div className='featured_job--wrapper__card--right'>
            <h1>Software Engineer</h1>
            <p>Enosis Solution</p>
            <Link to="#" className='featured_job--wrapper__card--right__status'>Full Time</Link>
        </div>
    </div>
  )
}

export default FeaturedJobItem