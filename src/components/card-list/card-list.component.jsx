import React from 'react';
import Card  from '../card/card.component';
import './card-list.styles.css';


 const CardList = (props) =>{
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