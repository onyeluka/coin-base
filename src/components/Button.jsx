import React from 'react'
import styled from 'styled-components'
const Button = ({text, icon=false,subduedButton=false}) => {
  return (
    <Div className='flex j-center a-center'>
{
    icon?
    <button className={`flex a-center j-center gap-1 ${subduedButton ? "subduedBtn": ""}`}>
        {text}
        {icon}
    </button> :
    <button className={`${subduedButton ? "subduedBtn": ""}`}>
        {text}
    </button>
}

    </Div>
  )
}
const Div = styled.div`
button:hover{
  background-color: var(--text-blue);
}
button{
  padding: 0.7rem 1.3rem;
  background-color:var(--blue);
  color: white;
  border:none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
}
.subduedBtn{
  background-color: var(--subdue-button);
}
`;
export default Button