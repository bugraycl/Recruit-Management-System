import React from 'react'
import { Link } from 'react-router-dom'
import defaultIcon from "../../../assets/images/default.png"

const FeaturedJobItem = ({ title, type, company, slug, icon }) => {
  return (
    <div className="featured_job--wrapper__card">
        <div className='featured_job--wrapper__card--left'>
            <img src={defaultIcon} alt="" width="100px" height="100px" />
        </div>
        <div className='featured_job--wrapper__card--right'>
            <h1>{title}</h1>
            <p>{company}</p>
            <Link to={`/job-details/${slug}`} className={type === "full time" ? "full-time" : "half-time"}>{type}</Link>
        </div>
    </div>
  )
}

export default FeaturedJobItem