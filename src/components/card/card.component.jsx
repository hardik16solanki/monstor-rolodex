import React from 'react';
import './card.styles.css'
const Card = (props) =>{
    return(
    <div className='card-container'>
        <img alt="monstor" src = {`https://robohash.org/${props.monstor.id}?size=180x180`}/>
        <h2>{props.monstor.name}</h2>
        <p>{props.monstor.email}</p>
    </div>
    );
}
  


export default Card;