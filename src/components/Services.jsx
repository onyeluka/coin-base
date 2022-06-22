import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const Services = () => {
    const servicesData = [
        {
          image: service1,
          title: "Secure storage",
          description:
            "We store the vast majority of the digital assets in secure offline storage.",
        },
        {
          image: service2,
          title: "Protected by insurance",
          description:
            "Coinbase maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
        },
        {
          image: service3,
          title: "Industry best practices",
          description:
            "Coinbase supports a variety of the most popular digital currencies.",
        },
      ];
  return (
    <DIV className='flex column j-center a-center gap'>
<div className="title-container flex column gap-1">
    <div className="title text-center">
        <h2>The most trusted cryptocurrency platform</h2>
    </div>
    <div className="subtitle text-center subdue">
        <h3>Here are a few reasons why you should choose Coinbase</h3>
    </div>
</div>

<div className="services flex j-center a-center gap">
    {servicesData.map(({image,title,description}) => {
        return (
            <div className="service text-center flex column gap-1" key={title}>

<div className="image">
    <img src={image} alt='services'/>
</div>
<h3 className="title">
    {title}
</h3>
<p className="description subdue">
    {description}
</p>
            </div>
        )
    })}
</div>
    </DIV>
  )
}
const DIV = styled.div`
.services{
    padding: 0 5rem;
    gap: 10rem;
    .service{
        .title{
            font-size:1.5rem;
        }
        .description{
            font-size:1rem;
            line-height: 1.2rem;
        }
    }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      padding: 2rem;
      gap: 3rem;
    }
  }
`
export default Services