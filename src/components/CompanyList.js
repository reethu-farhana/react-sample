import React from 'react'
import { Link } from 'react-router-dom'

function CompanyList(props) {
    return (
        <>
          <li className="company__item">
              <Link className="company__item__link" to={props.path}>
                  <figure className="company__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="online" className="company__item__img"/>
                  </figure>
                  <div className='company__item__info'>
                    <h5 className='company__item__text'>{props.text}</h5>
                </div>
              </Link>
          </li>  
        </>
    )
}

export default CompanyList
