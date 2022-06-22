import React from 'react';
import styled from 'styled-components';
import {FaChevronCircleRight} from 'react-icons/fa';
import home from '../assets/home.png';
import badgePercent from '../assets/badge-percent.png'
import Button from './Button';

const Home = () => {
  return (
    <DIV className='flex  gap'>
<div className="content flex column gap-2">
<div className="subtitle">
    <h3 className="flex a-center gap1 blue">
<span>
    <img src={badgePercent} alt='percentage image'/>
</span>
Investment Made Easy
    </h3>
</div>

<div className="title">
    <h1>
    Jump start your crypto portfolio
    </h1>
</div>
<div className="description">
<p className="subdue">
Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.
</p>
</div>
<div className="buttons flex gap-2">
   <Button text='Try Now' icon={<FaChevronCircleRight/>}/>
   <Button text='How it works?' subduedButton/>
</div>
</div>
<div className="image">
    <img src={home} alt='image' className='half-width' />
</div>

    </DIV>
  )
}
const DIV = styled.section`
@media screen and (min-width: 280px) and (max-width: 1080px) {
    .subtitle {
      h3 {
        flex-direction: row;
      }
    }
    .buttons {
      flex-direction: row;
      margin: 2rem 0;
      gap: 1rem;
    }
  }
`
export default Home