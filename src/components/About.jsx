import React from 'react';
import styled from 'styled-components';
import {FaChevronCircleRight} from 'react-icons/fa';
import about from '../assets/about.png';
import Button from './Button';
const About = () => {
  return (
    <DIV className='flex a-center gap'>
<div className="content flex column gap">
    <div className="title-container flex column j-center a-center gap1">
<div className="subtitle subdue">
    <h3>
    Create your cryptocurrency portfolio today
    </h3>
</div>
<div className="title">
<h2>
Coinbase has a variety of features that make it the best place to start trading
</h2>
</div>
    </div>
    <div className="flex gap">
        <div className="info flex column gap a-start j-center">
            <p className="subdue">
            Manage your portfolio
            </p>
            <p className="subdue">
            Buy and sell popular digital currencies, keep track of them in the one place.
            Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.
            For added security, store your funds in a vault with time delayed withdrawals.

            </p>
            <Button text='Start Earning' icon={<FaChevronCircleRight/>}/>
        </div>
        <div className="image">
            <img src={about} alt='about' className='quater-width'/>
        </div>
    </div>
</div>

    </DIV>
  )
}
const DIV = styled.section`
@media screen and (min-width: 280px) and (max-width: 1080px) {
    .title-container {
      text-align: center;
    }
  }
`

export default About