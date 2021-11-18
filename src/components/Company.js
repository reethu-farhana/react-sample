import React from 'react'
import CompanyList from './CompanyList'
import './Company.css';

function Company() {
    return (
        <div className='company'>
            <h1>Our Trainees are Working with</h1>

            <div className='company__container'>
                <div className='company__wrapper'>
                    <ul className='company__items'>
                        <CompanyList src="img/1.jpg" path='/clients' />                    
                        <CompanyList src="img/2.jpg" path='/clients' />
                        <CompanyList src="img/3.jpg" path='/clients' />
                        <CompanyList src="img/4.jpg" path='/clients' />
                    </ul>
                    <ul className='company__items'>
                        <CompanyList src="img/5.jpg" path='/clients' />
                        <CompanyList src="img/6.jpg" path='/clients' />
                        <CompanyList src="img/7.jpg" path='/clients' />
                        <CompanyList src="img/8.jpg" path='/clients' />

                    </ul>
                    <ul className='company__items'>
                        <CompanyList src="img/9.jpg" path='/clients' />
                        <CompanyList src="img/10.jpg" path='/clients' />
                        <CompanyList src="img/11.jpg" path='/clients' />
                        <CompanyList src="img/12.jpg" path='/clients' />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Company
