import React from 'react'
import CardItem from './CardItem'
import '../styles/Cards.scss'

export default function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Photos!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
             
            />
            <CardItem
              src='images/img-2.webp'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
             
            />
            <CardItem
              src='images/img-10.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              
            />
            <CardItem
              src='images/img-11.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
             
            />
            <CardItem
              src='images/img-6.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
             
            />
            <CardItem
              src='images/img-9.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
             
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
