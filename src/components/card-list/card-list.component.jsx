import React from 'react';
import Card  from '../card/card.component';
import './card-list.style.css';


 const CardList = (props) =>{
    console.log(props);
    return(
        <div className='card-list'>            
            {
              props.monstors.map(monstor => 
                <Card key = {monstor.id} monstor = {monstor}/>
              )
            }
        </div>
        );
}

export default CardList;