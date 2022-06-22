import React from 'react';
import styled from 'styled-components';
import {AiOutlineMail} from 'react-icons/ai';

import Button from '../components/Button';

const Newsletter = () => {
  return (
    <DIV className='flex j-between a-cente gap'>
        <div className="title-container flex column gap1">
            <h2>Newsletter</h2>
            <h3>Get all the news in your inbox</h3>
        </div>
<div className="newsletter flex j-center a-center gap-2">

    <div className="input-container flex-j-center a-center">
        <AiOutlineMail/>
        <input type='text' placeholder='Enter your email'/>

    </div>
    <Button text='subscribe' />
</div>

    </DIV>
  )
}
const DIV = styled.section`
margin: 0;
margin-bottom: 8rem;
background-color: var(--dark-background);
padding: 8rem;
.newsletter {
  .input-container {
    background-color: var(--input-background);
    padding: 1rem;
    padding-right: 8rem;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    color: white;
    input {
      background-color: transparent;
      border: none;
      font-size: 1.2rem;
      color: white;
      &:focus {
        outline: none;
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  padding: 2rem;
  margin-bottom: 2rem;
  .newsletter {
    .input-container {
      flex-direction: row;
      padding-right: 1rem;
      input {
      }
    }
  }
}
`
export default Newsletter