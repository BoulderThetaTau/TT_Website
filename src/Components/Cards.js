import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>More About Eta Gamma</h1>
      <div className='cards__container'>
        <div className='cards_wrapper'>
            <ul className='cards__items'>
            <CardItem
              src='images/About_Card.png'
              text='What is Theta Tau - Eta Gamma Chapter All About?'
              label='About'
              path='/about'
            />
            <CardItem
              src='images/Merc_Card.png'
              text='Learn more about the leaders of Eta Gamma Chapter
              and how they impact the brothers at Boulder'
              label='Mercury Council'
              path='/merc'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/ProfDev_Card.png'
              text='Members benefit from alumni mentorship, improve job-seeking skills, 
              practice interview techniques, and take on leadership roles'
              label='Professional Development'
              path='/prof-def'
            />
            <CardItem
              src='images/Brotherhood_Card.JPG'
              text='Fostering a close-knit community of engineering students through various events'
              label='Brotherhood'
              path='/brotherhood'
            />
            <CardItem
              src='images/CommServe_Card.png'
              text='Participates in service initiatives with the University and
              Boulder community. We are also proud partners of Habitat for Humanity.'
              label='Community Service'
              path='/comm-serve'
            />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
