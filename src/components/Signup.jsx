import React from "react";
import styled from "styled-components";
import card from "../assets/card.png";
import signup from "../assets/signupBackground.png";
const Signup = () => {
  return (
    <DIV className='flex gap j-between '>
<div className="content text-center">
    <h2>
 Signup without any bank account linking and card
    </h2>
</div>
<div className="image">
    <img src={card} alt='card' />
</div>
    </DIV>
  )
}
const DIV = styled.section`
background-image: url(${signup});
background-size:contain;
margin: 0;
margin-bottom: 8rem;
overflow:hidden;
max-width: 100vw;
.content{
    padding: 8rem;
    h2{
        font-size:2.4rem;
    }
}
.image{
    img{
        height:100%;
    }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-bottom: 2rem;
    .content {
      padding: 2rem;
      h2 {
        font-size: 1.5rem;
      }
    }
    .image {
      display: none;
    }
  }
`;
export default Signup