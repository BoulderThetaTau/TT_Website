import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1 style={{fontSize: '2rem'}}>More About Eta Gamma</h1>
      <div className='cards__container'>
        <div className='cards_wrapper'>
            <ul className='cards__items'>
            <CardItem
              src='images/About_Card.png'
              text='What is Theta Tau - Eta Gamma Chapter All About?'
              label='About'
              path='/about'
              labelColor='thetaTauRed'
            />
            <CardItem
              src='images/Merc_Card.png'
              text='Learn more about the leaders of Eta Gamma Chapter
              and how they impact the brothers at Boulder'
              label='Mercury Council'
              path='/merc'
              labelColor='thetaTauRed'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='images/ProfDev_Card.png'
              text='Have questions about our chapter or want to learn more about Theta Tau?
              Reach out to us!'
              label='Contact'
              path='/contact'
              labelColor='thetaTauRed'
            />
            <CardItem
              src='images/Brotherhood_Card.png'
              text='Want to rush Eta Gamma Chapter? We are always looking for new brothers to join!
              Find out more here!'
              label='Rush'
              path='/rush'
              labelColor='thetaTauRed'
            />
            <CardItem
              src='images/CommServe_Card.png'
              text='Theta Tau functions on three main values, Brotherhood, Community Service, and
              Professional Development. You can learn more about them here!'
              label='Our Three Pillars'
              path='/About'
              labelColor='thetaTauRed'
            />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards