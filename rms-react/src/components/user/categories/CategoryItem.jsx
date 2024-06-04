import React from 'react'
import { Link } from "react-router-dom"
import defaultIcon from "../../../assets/images/default.png"

const CategoryItem = ({name,icon,slug,count}) => {
  return (
    <div className="category-container--card-wrapper__card">
        <img src={defaultIcon} alt="Category-icon" width="100px" height="100px" />
        <Link to={`categories/jobs/${slug}`}>
        <h1>{name}</h1>
        </Link>
        <p>{count}</p>
  </div>
  )
}

export default CategoryItem