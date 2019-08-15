import React from 'react';
import './PhotoCard.scss';
import { Card } from 'semantic-ui-react';

function PhotoCard(props) {
    
    return (
        <Card className='photo-card'>
            <Card.Content>
                <h3>{props.title}</h3>
                <p>{props.date}</p>
                <img src={props.url} />
                <p>{props.explanation}</p>
            </Card.Content>
        </Card>
    )
}

export default PhotoCard;