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
              text='The essence of contentment featuring a blissful cat lounging comfortably'
              label='Adventure'
             
            />
            <CardItem
              src='images/img-2.webp'
              text='A poised feline gracefully stretching, embodying the spirit of relaxation'
              label='Luxury'
             
            />
            <CardItem
              src='images/img-10.jpg'
              text='A moment of collective tranquility, a shared journey towards relaxation and spiritual connection, away from the hustle of daily life.'
              label='Mystery'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='A playful kitten in the midst of a stretch, mirroring a yoga pose with natural grace.'
              label='Adventure'
              
            />
            <CardItem
              src='images/img-11.jpg'
              text='A carefree moment under the sun that reflects the spirited and spontaneous nature of feline companions.'
              label='Adrenaline'
             
            />
            <CardItem
              src='images/img-6.jpeg'
              text='Ginger cat sitting regally like a wise instructor or a curious observer.'
              label='Adrenaline'
             
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='A moment of joy and relaxation'
              label='Adventure'
              
            />
            <CardItem
              src='images/img-8.jpg'
              text='A heartwarming image capturing an intimate moment between two cats sharing a gentle nuzzle, symbolizing affection and companionship.'
              label='Adrenaline'
             
            />
            <CardItem
              src='images/img-9.jpg'
              text='A highlight into shared experience of wellness and mindfulness.'
              label='Adrenaline'
             
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
