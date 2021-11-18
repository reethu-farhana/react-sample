import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Let's Update Your Skills from anywhere</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src="img/01.jpg" text='Explore the hidden talent and build your career'label='Online Training' path='/services' />
                    
                        <CardItem src="img/02.jpg" text='Explore the hidden talent and build your career'label='Offline Training' path='/services' />

                        <CardItem src="img/03.jpg" text='Explore the hidden talent and build your career'label='Weekend Training' path='/services' />

                    </ul>
                    <ul className='cards__items'>
                       
                        <CardItem src="img/04.jpg" text='Explore the hidden talent and build your career'label='Corporate Training' path='/services' />

                        <CardItem src="img/05.jpg" text='Explore the hidden talent and build your career'label='Job Placement Assistance' path='/services' />

                        <CardItem src="img/06.jpg" text='Explore the hidden talent and build your career'label='Hire Train and Deploy' path='/services' />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
