import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './PhotoCard.scss';

function PhotoCard(props) {
    
    return (
        <Card className='photo-card'>
            <Image src={props.url} />
            <Card.Content>
                <h3 className='headline'>{props.title}</h3>
                <Card.Description>
                    <p className='description'>{props.explanation}</p>
                </Card.Description>
                <h5 className='dater'>Date: {props.date}</h5>
            </Card.Content>
        </Card>
    )
}

export default PhotoCard;