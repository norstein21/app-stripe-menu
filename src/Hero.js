import React from 'react'
import phoneImg from './images/phonefira.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Capek gunakan dompet?</h1>
          <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
          <button className='btn'>
        Show Info
      </button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phoneimg' className='phone-img' />
        </article>
      </div>
      
    </section>
  );
}

export default Hero
