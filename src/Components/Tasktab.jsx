import React from 'react'
import { Link } from 'react-router-dom'
export default function Tasktab(props) {
  return (
    <Link to='/' className="btn btn-light rounded-5 text-secondary fw-bold tasktabs d-flex align-items-center justify-content-between">
       <span>{props.title}</span>
       {props.options && <i class="fa-solid fa-chevron-right"></i>}
    </Link>
  )
}
